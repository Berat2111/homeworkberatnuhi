function otstraniGoElementotOdNiza(niza, broj) {
    let index = niza.indexOf(broj); 
    if (index !== -1) { 
      niza.splice(index, 1); 
    }
    return niza; 
  }
  
  let broevi = [1, 2, 3, 4, 5];
  let otstranetBroj = 3;
  let popraveniBroevi = otstraniGoElementotOdNiza(broevi, otstranetBroj);
  console.log(popraveniBroevi);



  function vkupenBroj(broj) {
    let i = 0;
    while (broj !== 0) {
      i++;
      broj = Math.floor(broj / 10); 
    }
    return i;
  }
  
  let broj = 2587987;
  let count = vkupenBroj(broj);
  console.log(count); 



  let numbers = [335, 18, 447, 3, 666];

let najgolemBroj = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > najgolemBroj) {
    najgolemBroj = numbers[i]; 
  }
}

console.log("Naj golemiot broj e: " + najgolemBroj); 
