'use strict';
const btnGewicht = document.getElementById('gewichtBerekenen');
const inputVeld = document.getElementById('gewichtGram');
const outputVeld = document.getElementById('diamantGewichtCarat');

function gewichtInCarat() {
  let carat = inputVeld.value / 0.2;
  outputVeld.classList.remove('hidden');
  outputVeld.style.opacity = '0';
  outputVeld.innerHTML = carat + ' Carats';
  outputVeld.style.opacity = '1';
}
