import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options } from 'rehype-react';
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
import { fromHtml } from 'hast-util-from-html';
import runtime from 'react/jsx-runtime';

const Now: FunctionComponent = () => {
  const [now, setNow] = useState('<p>Current time in your browser: <Now /></p>');
  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date().toString());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
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
    html: '',
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
