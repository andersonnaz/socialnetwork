export class Address {
  private street: string;
  private number: number;
  private neighborhood: string;

  constructor(street: string, number: number, neighborhood: string){
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
  }

  static validate(street: string, number: number, neighborhood: string): boolean {
    if(!street){
      throw new Error('invalid street!');
    }
    if(!number){
      throw new Error('invalid number!');
    }
    if(!neighborhood){
      throw new Error('invalid neighborhood!');
    }
    return true;
  }
}
