// Const

/* 
   
   A declaração const cria uma referência somente leitura para um valor. 
   Isso não significa que o valor que ele contém é imutável, 
   apenas que o identificador da variável não pode ser reatribuído (reassigned).

*/

var hello = 'bom dia'; // assigning
hello = 'boa tarde!'; // reassigning

const hello2 = 'bom dia';
hello2 = 'boa tarde!'; // error

// Arrays e Objects
const marks = [92, 83];
marks.push(95)
console.log(marks) 

marks = [90, 80] // error


/* 
   
   const deve ser usado quando você tem uma constante definida 
   (leia como: não vai mudar durante a execução do seu programa)

*/