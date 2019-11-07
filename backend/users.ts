export class User {
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined &&
           another.email === this.email &&
           another.password === this.password
  }
}

export const users: {[key:string]: User} = {
  "diego@hotmail.com": new User('diego@hotmail.com', 'Diego', 'diego123'),
  "dani@hotmail.com": new User('dani@hotmail.com', 'Daniela', 'dani321')
}
