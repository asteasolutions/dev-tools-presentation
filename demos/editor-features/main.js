window.addEventListener('input', function (event) {
  'use strict';
  console.log('input listener executed', event.target.valueAsNumber); //test event propagation
  //var $ = document.querySelector.bind(document);
  //$('#result').value = $('#a').valueAsNumber + $('#b').valueAsNumber;
}, false);
