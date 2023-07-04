/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
export class Address {
  private _street: string;
  private _number: number;
  private _neighborhood: string;

  private constructor(street: string, number: number, neighborhood: string) {
    this._street = street;
    this._number = number;
    this._neighborhood = neighborhood;
  }

  static create(street: string, number: number, neighborhood: string): Address {
    this.validate(street, number, neighborhood);
    return new Address(street, number, neighborhood);
  }

  static validate(
    street: string,
    number: number,
    neighborhood: string,
  ): boolean {
    if (!street) {
      throw new Error('invalid street!');
    }
    if (!number) {
      throw new Error('invalid number!');
    }
    if (!neighborhood) {
      throw new Error('invalid neighborhood!');
    }
    return true;
  }

  get street(): string {
    return this.street;
  }

  get number(): number {
    return this._number;
  }

  get neighborhood(): string {
    return this._neighborhood;
  }

  set street(newStreet: string) {
    if (!newStreet) {
      throw new Error('invalid new street!');
    }
    if (newStreet === this._street) {
      throw new Error('new street is equal!');
    }
    this._street = newStreet;
  }

  set number(newNumber: number) {
    if (!newNumber) {
      throw new Error('invalid new number!');
    }
    if (newNumber === this._number) {
      throw new Error('new number is equal!');
    }
    this._number = newNumber;
  }

  set neighborhood(newNeighborhood: string) {
    if (!newNeighborhood) {
      throw new Error('invalid new Neighborhood!');
    }
    if (newNeighborhood === this._neighborhood) {
      throw new Error('new neighborhood is equal!');
    }
    this._neighborhood = newNeighborhood;
  }
}
