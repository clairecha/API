var cnt = document.getElementById(count);
ul = document.getElementById('myUL');
var input, filter, ul, li, a, i, txtValue;
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.addEventListener('load', function () {
    if (req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    } else {
      console.error(req.status + ' ' + req.statusText + ' ' + url);
    }
  });
  req.addEventListener('error', function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

ajaxGet('https://restcountries.eu/rest/v2/all', function (response) {
  var countries = JSON.parse(response);
  let newli = '';
  countries.forEach(function (countrie) {
    newli += `
    <li>
      <img src="${countrie.flag} " alt=""> 
      <a href="">la population de ${countrie.name}</a>
      <a href="">est de ${countrie.population} habitants</a>
      <a href="">Sa capital est ${countrie.capital}</a>
      <a href="">Sa monaie est ${countrie.currencies[0].name}</a>
      <a href="">Ce pays est situé en ${countrie.region} plus précisément en  ${countrie.subregion}</a>

    </li>
    `;
  });
  ul.innerHTML = newli;
});
console.log('thomas');
console.log('claire');

function myFunction() {
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
