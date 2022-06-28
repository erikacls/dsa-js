
// Escopo de Bloco genérico
{ 
	var a = 21;
}

if (true) {
	var b = 22;
  // Escopo de Bloco condicional if
}

// Usando var
for (var i = 1; i <= 10; i++) {
  // Escopo de Bloco loop
  var c = 23;
}

function soma(a, b) {
  // Escopo de Bloco de Função
  var resultado = a + b;
}

// Abrindo uma nova sessão Node e usando let

if (true) {
	let b = 22;
  // Escopo de Bloco condicional if
}

for (let i = 1; i <= 10; i++) {
  // Escopo de Bloco de Função
  var c = 24;
  let d = 25;
}

// Escopo de Bloco genérico
{ 
	let a = 25;
}
