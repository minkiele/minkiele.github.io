import { FunctionComponent, useEffect, useState } from "react";
import { pronunciaDataOra } from "../../lib/EnunciateNumbers";
import Markdown from "../../shared/Markdown/Markdown";
import OraInParoleMd from './OraInParole.md';

const orora = () => pronunciaDataOra(new Date());

const OraInParole: FunctionComponent = () => {
  const [oraInParole, setOraInParole] = useState<string>(orora());

  useEffect(() => {
    const intervalId = setInterval(() => {
        setOraInParole(orora());
    }, 1000);
    return () => {
        clearInterval(intervalId);
    }
  }, []);

  return (
    <div>
      <Markdown>{OraInParoleMd}</Markdown>
      <h2>{oraInParole}</h2>
    </div>
  );
};

export default OraInParole;
