import anagrammator from "anagrammator";
import { AnagrammatorWorkerRequest, AnagrammatorWorkerResponse } from "./Anagrammator.models";

self.addEventListener('message', (evt: MessageEvent<AnagrammatorWorkerRequest>) => {
    if(evt.data.type === 'anagrammatorWorkerRequest') {
        const anagramms = anagrammator(evt.data.input);
        const output: AnagrammatorWorkerResponse = {
            id: evt.data.id,
            type: 'anagrammatorWorkerResponse',
            anagramms
        };
        self.postMessage(output);
    }
});
