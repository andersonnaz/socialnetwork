import { Address } from "./Address";
import { Cpf } from "./Cpf";
import { Email } from "./Email";
import { v4 as uuid } from 'uuid';

export class User {
  private readonly _id: string;
  private readonly _cpf: Cpf;
  private readonly _email: Email;
  private _name: string;
  private _address: Address;
  private _password: string;

  private constructor(name: string, address: Address, cpf: Cpf, email: Email, password: string){
    this._id = this.generateId();
    this._name = name;
    this._address = address;
    this._cpf = cpf;
    this._email = email;
    this._password = password;
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

  get id(): string {
    return this._id;
  }

  get cpf(): string {
    return this._cpf.number;
  }

  get email(): string {
    return this._email.email;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return `
      Rua: ${this._address.street}, ${this._address.number}
      Bairro: ${this._address.neighborhood}
    `
  }

  get password(): string {
    return this._password;
  }

  set name(newName: string) {
    if(!newName){
      throw new Error('invalid new Name!')
    }
    if(newName === this._name){
      throw new Error('new name is equal!')
    }
    this._name = newName;
  }

  set address(newAddress: Address){
    if(!newAddress.street){
      throw new Error('invalid new street!')
    }
    if(!newAddress.number){
      throw new Error('invalid new number!');
    }
    if(!newAddress.neighborhood){
      throw new Error('invalid new neighborhood!');
    }
    this._address = newAddress;
  }

  set password(newPassword: string){
    if(!newPassword){
      throw new Error('invalid new Password!');
    }
    this._password = newPassword;
  }
}
