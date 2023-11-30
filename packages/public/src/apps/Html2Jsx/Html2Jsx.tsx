import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options } from 'rehype-react';
import { pronunciaDataOra } from '../../lib/EnunciateNumbers';
import {
  ChangeEventHandler,
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from '../Md2Html/Md2Html.module.scss';
import Md2HtmlMd from './README.md';
// This is used in rehype-parse, but it has been re-imported to show the HAST
import { fromHtml } from 'hast-util-from-html';
import runtime from 'react/jsx-runtime';
import dayjs from 'dayjs';

const Now: FunctionComponent<{format?: 'string'}> = ({format}) => {
  const [now, setNow] = useState('');
  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(format == null || format.length === 0 ? pronunciaDataOra(new Date()) : dayjs().format(format));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [format]);
  return <span>{now}</span>;
};

const rehypeReactOptions = {
  // @ts-expect-error
  Fragment: runtime.Fragment,
  // @ts-expect-error
  jsx: runtime.jsx,
  // @ts-expect-error
  jsxs: runtime.jsxs,
  components: { now: Now },
} as Options;

const Html2Jsx = () => {
  const processor = useRef(
    unified()
      .use(rehypeParse, {
        fragment: true,
      })
      .use(rehypeReact, rehypeReactOptions)
  );

  const [{ nodes, html }, setState] = useState<{
    nodes: ReactNode;
    html: string;
  }>({
    nodes: undefined,
    html: '<p>Current time in your browser: <Now /></p>',
  });

  useEffect(() => {
    processor.current.process(html).then(
      (output) => {
        setState((current) => ({
          ...current,
          nodes: output.result as JSX.Element,
        }));
      },
      (error) => {
        setState((current) => ({
          ...current,
          nodes: String(error),
        }));
      }
    );
  }, [html]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setState((current) => ({ ...current, html: evt.target.value }));
  };

  const tree = useMemo(
    () => JSON.stringify(fromHtml(html, { fragment: true }), null, '  '),
    [html]
  );

  return (
    <div>
      <Md2HtmlMd />
      <div className={styles.container}>
        <div className={styles.column}>
          <label htmlFor="input">HTML</label>
          <textarea
            name="input"
            value={html}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
        <div className={styles.column}>
          <div>
            <h2>HAST</h2>
            <code>{tree}</code>
          </div>
          <div>
            <h2>JSX</h2>
            {nodes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html2Jsx;
