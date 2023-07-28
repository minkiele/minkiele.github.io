import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styles from './Md2Html.module.scss';

const Md2Html = () => {
  const processor = useRef(
    unified().use(remarkParse).use(remarkRehype).use(rehypeStringify)
  );
  const [{ md, html }, setState] = useState<{ md: string; html: string }>({
    md: '',
    html: '',
  });

  useEffect(() => {
    processor.current.process(md).then(
      (output) => {
        setState((current) => ({ ...current, html: String(output) }));
      },
      (error) => {
        setState((current) => ({ ...current, html: String(error) }));
      }
    );
  }, [md]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setState((current) => ({ ...current, md: evt.target.value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <textarea name="input" value={md} onChange={handleChange} className={styles.textarea} />
      </div>
      <div className={styles.column}>
        <textarea readOnly name="output" value={html} className={styles.textarea} />
      </div>
    </div>
  );
};

export default Md2Html;
