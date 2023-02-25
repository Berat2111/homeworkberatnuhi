function nuhiBerat(br1, br2, br3) {
    if (br1 == br2 || br2 == br3 || br1 == br3) {
      return alert(true);
    } else {
      return alert(false);
    }
    
  }

 nuhiBerat(1, 3, "3"); 


 function beratNuhi(mesec, godina = undefined) {
 
  if (mesec === 2 && !godina) {
    godina = prompt("Vnesi godina da vidis dali e toa preskokna godina:");
  }

  if (mesec === 2) {
    if (godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)) {
      return 29;
    } else {
      return 28;
    }
  } else if ([4, 6, 9, 11].includes(mesec)) {
    return 30;
  } else {
    return 31;
  }
}
const mesec = parseInt(prompt("Vnesi mesec (1-12):"));
console.log(`Ovoj mesec ${mesec} ima ${beratNuhi(mesec)} denovi.`);

