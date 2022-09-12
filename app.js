// https://www.omnicalculator.com/conversion/crore-to-lakh

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lakhRadio = document.getElementById('lakhRadio');
const croreRadio = document.getElementById('croreRadio');

let lakh;
let crore = v; 

// labels of the inpust
const variable = document.getElementById('variable');

lakhRadio.addEventListener('click', function() {
  variable.textContent = 'Crore';
  crore = v;
  result.textContent = '';
});

croreRadio.addEventListener('click', function() {
  variable.textContent = 'Lakh';
  lakh = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lakhRadio.checked)
    result.textContent = `Lakh = ${computelakh().toFixed(5)}`;

  else if(croreRadio.checked)
    result.textContent = `Crore = ${computecrore().toFixed(5)}`;
})

// calculation

function computelakh() {
  return Number(crore.value) * 100;
}

function computecrore() {
  return Number(lakh.value) / 100;
}