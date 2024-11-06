export interface Term {
  getStringValue(): string;
  asPromise(): Promise<string>;
}

export type InputTerm = string | Term;

export class StringTerm implements Term {
  constructor(private term: string) {}
  public getStringValue(): string {
    return this.term;
  }
  public toString(): string {
    return this.getStringValue();
  }
  public asPromise(): Promise<string> {
    return Promise.resolve(this.getStringValue());
  }
}

const normalizeTerm = (term: InputTerm): Term => (typeof term === 'string' ? new StringTerm(term) : term);

export class WeightedTerm implements Term {
  private term: Term;
  private _weight: number = 0;
  public get weight() {
    return this._weight;
  }

  public constructor(term: InputTerm, weight = 0) {
    this.term = normalizeTerm(term);
    if (weight < 0) {
      throw new Error('Term weight must be >= 0');
    }
    this._weight = weight;
  }
  public getStringValue(): string {
    return this.term.getStringValue();
  }
  public toString(): string {
    return this.getStringValue();
  }
  public asPromise(): Promise<string> {
    return Promise.resolve(this.getStringValue());
  }
}

export class WeightedCollection implements Term {
  private collection: Array<WeightedTerm> = [];
  private weight = 0;
  private weights: Array<number> = [];
  public constructor(...collection: Array<InputTerm>) {
    if (collection.length <= 0) {
      throw new Error('Collection must have at least one element');
    }
    this.collection = collection
      .map((term) => (term instanceof WeightedTerm ? term : new WeightedTerm(term)))
      .sort((a, b) => a.weight - b.weight);
    this.weights = this.collection.reduce<Array<number>>(
      (weights, term, index) => [...weights, term.weight + (index > 0 ? weights[index - 1] : 0) + 1],
      []
    );
    this.weight = this.collection.reduce((sum, term) => sum + term.weight, 0) + this.collection.length;
  }
  protected getRandomIndex(): number {
    const randomWeight = Math.floor(Math.random() * this.weight);
    let i = 0;
    for (; i < this.weights.length; i += 1) {
      if (randomWeight < this.weights[i]) {
        break;
      }
    }
    return i;
  }
  public getStringValue(): string {
    return this.collection[this.getRandomIndex()].getStringValue();
  }
  public toString(): string {
    return this.getStringValue();
  }
  public forExpansion(): WeightedTerm {
    return new WeightedTerm(this, this.weight);
  }
  public async asPromise(): Promise<string> {
    return this.getStringValue();
  }
}

export class TermsJoiner implements Term {
  private parts: Array<Term>;
  private separator = '';
  public constructor(...parts: Array<InputTerm>) {
    this.parts = parts.map((term) => (typeof term === 'string' ? new StringTerm(term) : term));
  }
  public withSeparator(separator: string): this {
    this.separator = separator;
    return this;
  }
  public getStringValue(): string {
    return this.parts.map((part) => part.getStringValue()).join(this.separator);
  }
  public toString(): string {
    return this.getStringValue();
  }
  public async asPromise(): Promise<string> {
    return this.getStringValue();
  }
}

export class SpaceJoiner extends TermsJoiner {
  public constructor(...parts: Array<InputTerm>) {
    super(...parts);
    this.withSeparator(' ');
  }
}

export const join = (...terms: Array<InputTerm>): TermsJoiner => new TermsJoiner(...terms);
export const pickOne = (...terms: Array<InputTerm>): WeightedCollection => new WeightedCollection(...terms);
export const maybePickOne = (...terms: Array<InputTerm>): WeightedCollection => pickOne('', pickOne(...terms).forExpansion());
export const weight = (term: InputTerm, weight?: number) => new WeightedTerm(term, weight);
