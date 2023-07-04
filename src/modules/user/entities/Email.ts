/* eslint-disable no-useless-escape */
const REGEX_VALIDATE_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export class Email {
  private readonly _email: string;
  private readonly _name: string;

  private constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

  static create(name: string, email: string): Email {
    this.validate(email);
    return new Email(name, email);
  }

  static validate(email: string): boolean {
    if (!email) {
      throw new Error('invalid email!');
    }
    if (!REGEX_VALIDATE_EMAIL.test(email)) {
      throw new Error('invalid email!');
    }
    return true;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }
}
