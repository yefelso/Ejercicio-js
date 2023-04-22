const event = new Date('April 22, 2023 23:15:30');

evento.setDate(28);

console.log(evento.getDate());
// Expected output: 24

evento.setDate(32);
// Only 31 days in August!

console.log(evento.getDate());
// Expected output: 1

