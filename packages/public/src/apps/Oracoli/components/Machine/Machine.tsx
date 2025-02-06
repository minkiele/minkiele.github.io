import { useMachine } from '@xstate/react';
import oracolos from 'oracolos';

const useOracolos = (answers: Array<string>) => {
    const [state, whatnot] = useMachine(oracolos, {
        input: {
            collection: answers
        }
    });
}

const Machine = ({answers}: {answers: Array<string>}) => {

};