 // Write code under this line
// Напиши функцию-конструктор Account, 
//которая создает объект со свойствами login и email.
//В prototype функции-конструктора добавь метод getInfo(),
//который возвращает строку со значениями свойств 
//login и email объекта.
 
const Account = function (login, email) {
    this.login = login;
    this.email = email;
};
/*Account.prototype.getInfo = function () {
  let string = '';
  const keys = Object.keys(this);
  for (let i = 0; i < keys.length; i += 1) {    
    string +=
      i === 0
        ? `${keys[i]} : ${this[keys[i]]}, `
        : `${keys[i]}: ${this[keys[i]]}`;
  }
  return string;
};*/ 
Account.prototype.getInfo = function() {
    return `login : ${this.login}, email: ${ this.email}`;
};
console.log(typeof Account.prototype.getInfo);
// 'function'

 const mango = new Account( 'Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'

 const poly = new Account( 'Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'