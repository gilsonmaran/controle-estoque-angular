export class Product {
  private _id?: number;
  private _name?: string;
  private _qtd?: number;

  constructor(name: string, qtd: number) {
    this._name = name;
    this._qtd = qtd;
  }

  get name() {
    return this._name;
  }

  get qtd() {
    return this._qtd;
  }
}
