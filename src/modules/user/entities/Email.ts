export class Email {
  private readonly email: string;
  private readonly name: string;

  constructor(name: string, email: string){
    this.name = name;
    this.email = email;
  }
}
