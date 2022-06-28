const X = function () {
  // "this" é o chamador da função X e faz referência a ele
};

const Y = () => {
  // "this" não é o chamador da função Y,
  // mas sim o valor do escopo de Y
};
