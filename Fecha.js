
let hoy = new Date();

let dia = hoy.getDate();
let mes = hoy.getMonth()+1;
let agnio = hoy.getFullYear();

// AAA-MM-DD:

let formato1 = `${agnio}-${mes}-${dia}`;
console.log(formato1);