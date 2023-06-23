export class Address {
  private street: string;
  private number: number;
  private neighborhood: string;

  constructor(street: string, number: number, neighborhood: string){
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
  }
}
