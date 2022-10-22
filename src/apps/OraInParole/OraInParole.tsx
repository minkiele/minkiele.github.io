import { FunctionComponent, useEffect, useState } from "react";
import { pronunciaDataOra } from "../../lib/EnunciateNumbers";

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
      <h2>{oraInParole}</h2>
    </div>
  );
};

export default OraInParole;
