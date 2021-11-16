import { useEffect, useState } from "react";

const TriggerEffect = (): JSX.Element => {
    const [trigger, setTrigger] = useState<string>();
    const value = 'TEST';
    useEffect(() => {
        setTrigger('OnMount');
    }, []);
    useEffect(() => {
        setTrigger('Dependency');
    }, [value]);
    return <div>{trigger}</div>
};

export default TriggerEffect;
