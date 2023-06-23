import { Address } from "./Address";
import { Cpf } from "./Cpf";
import { Email } from "./Email";

export class User {
  private readonly id: string;
  private readonly cpf: Cpf;
  private readonly email: Email;
  private name: string;
  private address: Address;
  private password: string;

  private constructor(name: string, address: Address, cpf: Cpf, email: Email, password: string){
    this.name = name;
    this.address = address;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
  }
}
