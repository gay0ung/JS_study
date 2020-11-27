// 타입 단언(type assertion)
let a;
a = 10;
a = 'abc'
// let b = a
let b = a as string; 

// DOM API조작 
// <div id="app">hi</div>
let div = document.querySelector('div');