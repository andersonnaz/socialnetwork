import { Address } from "./Address";
import { Cpf } from "./Cpf";
import { Email } from "./Email";
import { v4 as uuid } from 'uuid';

export class User {
  private readonly id: string;
  private readonly cpf: Cpf;
  private readonly email: Email;
  private name: string;
  private address: Address;
  private password: string;

  private constructor(name: string, address: Address, cpf: Cpf, email: Email, password: string){
    this.id = this.generateId();
    this.name = name;
    this.address = address;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
  }

  static create(name: string, address: Address, cpf: Cpf, email: Email, password: string): User {
    this.validate(name, password);
    return new User(name, address, cpf, email, password);
  }

  static validate(name: string, password: string): boolean {
    if(!name){
      throw new Error('invalid name!');
    }
    if(!password){
      throw new Error('invalid password!');
    }
    return true;
  }

  private generateId(): string {
    return uuid();
  }
}
