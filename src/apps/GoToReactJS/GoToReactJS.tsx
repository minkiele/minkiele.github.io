import { useState } from "react";
import useTimebomb from "../../hooks/useTimebomb";

const GoToReactJS = (): JSX.Element => {
  const handleTimebomb = () => {
    window.location.href = "https://reactjs.org/";
  };

  const handleTriggerTimebomb = useTimebomb({
    callback: handleTimebomb,
    timeout: 5000,
  });

  const [triggered, setTriggered] = useState<boolean>(false);

  const handleClickTimebomb = () => {
    handleTriggerTimebomb();
    setTriggered(true);
  };

  return (
    <button disabled={triggered} onClick={handleClickTimebomb}>
      Go to ReactJS
    </button>
  );
};

export default GoToReactJS;
