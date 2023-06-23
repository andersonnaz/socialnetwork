const REGEX_VALIDATE_CPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
export class Cpf {
  private readonly name: string;
  private readonly number: string;

  constructor(name: string, number: string){
    this.name = name;
    this.number = number;
  }

  static validate(number: string): boolean {
    if(!number){
      throw new Error('invalid cpf!');
    }
    if(!REGEX_VALIDATE_CPF.test(number)){
      throw new Error('invalid cpf!');
    }
    return true;
  }
}
