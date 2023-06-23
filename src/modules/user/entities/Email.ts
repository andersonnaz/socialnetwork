const REGEX_VALIDATE_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export class Email {
  private readonly email: string;
  private readonly name: string;

  private constructor(name: string, email: string){
    this.name = name;
    this.email = email;
  }

  static create(name: string, email: string): Email {
    this.validate(email);
    return new Email(name, email);
  }

  static validate(email: string): boolean {
    if(!email){
      throw new Error('invalid email!');
    }
    if(REGEX_VALIDATE_EMAIL.test(email)){
      throw new Error('invalid email!');
    }
    return true;
  }
}
