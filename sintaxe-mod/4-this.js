// Comportamento da palavra reservada "this" com e sem a seta 

this.id = 'exports';

const testerObj = {
  func1: function () {
    console.log('func1', this);
  },

  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1();
testerObj.func2();
