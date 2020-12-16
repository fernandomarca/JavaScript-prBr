function getDrink(type) {
  var drinks = {
    'coke': () => { return 'Coke' },
    'pepsi': () => { return 'pepsi' },
  };
  return drinks[type]();
}

console.log(getDrink('coke'));

