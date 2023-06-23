const REGEX_VALIDATE_CPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
export class Cpf {
  private readonly _name: string;
  private readonly _number: string;

  private constructor(name: string, number: string){
    this._name = name;
    this._number = number;
  }

  static create(name: string, number: string): Cpf {
    this.validate(number);
    return new Cpf(name, number);
  }

  static validate(number: string): boolean {
    if(!number){
      throw new Error('invalid cpf!');
    }
    if(REGEX_VALIDATE_CPF.test(number)){
      throw new Error('invalid cpf!');
    }
    return true;
  }

  get name(): string {
    return this._name;
  }

  get number(): string {
    return this._number;
  }
}
