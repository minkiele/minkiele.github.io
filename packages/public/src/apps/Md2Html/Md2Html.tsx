'use client';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-dom-stringify';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styles from './Md2Html.module.scss';
export { default as ReadmeMd } from './README.md';
import kebabCase from 'lodash.kebabcase';

const serializer = (output: string) =>
  JSON.stringify(
    output
      .trim()
      .split(/\r?\n/)
      .map((line) => line.trim())
      .join('')
  );

const Md2Html = () => {
  const processor = useRef(
    unified().use(remarkParse).use(remarkRehype).use(rehypeStringify)
  );
  const [{ md, html }, setState] = useState<{ md: string; html: string }>({
    md: '',
    html: '',
  });

  useEffect(() => {
    new Promise<string>((res, rej) => {
      if (md.length > 0) {
        res(md);
      } else {
        rej();
      }
    }).then(
      (md) =>
        processor.current.process(md).then(
          (output) => {
            setState((current) => ({
              ...current,
              html: serializer(String(output)),
            }));
          },
          (error) => {
            setState((current) => ({
              ...current,
              html: serializer(String(error)),
            }));
          }
        ),
      () => {
        setState((current) => ({
          ...current,
          html: '',
        }));
      }
    );
  }, [md]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setState((current) => ({ ...current, md: evt.target.value }));
  };

  const [{ text, kebab }, setKebab] = useState<{ text: string; kebab: string }>(
    { text: '', kebab: '' }
  );

  const handleKebab: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setKebab((current) => ({
      ...current,
      text: evt.target.value,
      kebab: kebabCase(evt.target.value),
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <label htmlFor="input">Markdown</label>
          <textarea
            name="input"
            value={md}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
        <div className={styles.column}>
          <label htmlFor="output">HTML</label>
          <textarea
            readOnly
            name="output"
            value={html}
            className={styles.textarea}
          />
        </div>
      </div>
      <div className={styles.kebab}>
        <fieldset>
          <legend>Kebab Case</legend>
          <label htmlFor="text">Text</label>{' '}
          <input id="text" type="text" onChange={handleKebab} value={text} />{' '}
          <label htmlFor="kebab">Kebab</label>{' '}
          <input id="kebab" type="text" value={kebab} />
        </fieldset>
      </div>
    </>
  );
};

export default Md2Html;
