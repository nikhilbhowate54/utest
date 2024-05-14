// Localstorage 
const store =require('store2')

// setting to store key value
store ("profie",{name:'nik',job:'developer'})

store.setAll({name:'kap',userName:'neo'})

console.log(store(
  'profie'
));

console.log(store.getAll());
console.log(store.keys());