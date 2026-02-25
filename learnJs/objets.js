let user = {
    name : 'Yves',
    age : 22,
    sayHi(){
        return(this.name);
    }
};

let calculator = {
    a : 0,
    b : 0,
    read(){
        this.a = parseInt(prompt('saisir un nombre: ')),
        this.b = parseInt(prompt('saisir un autre nombre: '));
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b
    }
}

console.log(calculator.a, calculator.b);
calculator.read();
console.log(calculator.a, calculator.b)
console.log(calculator.sum());
console.log(calculator.mul());




