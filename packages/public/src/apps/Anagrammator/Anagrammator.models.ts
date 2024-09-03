export interface AnagrammatorWorkerRequest {
    type: 'AnagrammatorWorkerRequest';
    input: string;
}

export interface AnagrammatorWorkerResponse {
    type: 'AnagrammatorWorkerResponse';
    input: string;
    output: Array<string>;
}
