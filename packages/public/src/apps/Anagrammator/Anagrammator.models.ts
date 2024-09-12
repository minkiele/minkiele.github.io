export interface AnagrammatorWorkerRequest {
  id: string;
  type: 'anagrammatorWorkerRequest';
  input: string;
}

export interface AnagrammatorWorkerResponse {
  id: string;
  type: 'anagrammatorWorkerResponse';
  anagramms: Array<string>;
}
