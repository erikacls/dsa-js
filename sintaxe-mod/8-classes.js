// Classe

class Pessoa {
  constructor(name) {
    this.name = name;
  }
  greet() {
    // Usando template string
    console.log(`Oi, eu sou ${this.name}!`);
  }
}

class Estudante extends Pessoa {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Oi, eu sou ${this.name} e estou no ${this.level}`);
  }
}

const o1 = new Pessoa("Peter");
const o2 = new Estudante("Bob", "Curso 1");
const o3 = new Estudante("Mary", "Curso 2");

o3.greet = () => console.log('Eu estou no Curso 3!');

o1.greet();
o2.greet();
o3.greet();
