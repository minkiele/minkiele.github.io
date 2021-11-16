import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useNextTick = <T extends (...args: Array<any>) => any>(callback: T): Dispatch<SetStateAction<Parameters<T> | undefined>> => {
    const [callParams, setCallParams] = useState<Parameters<T>>();
    useEffect(() => {
        callback(...callParams as Parameters<T>);
    }, [callback, callParams]);
    return setCallParams;
};

export default useNextTick;
