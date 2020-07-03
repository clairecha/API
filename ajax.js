// var cnt = document.getElementById(count);
ul = document.getElementById('myUL');
let tableauvide = [];
var input, filter, ul, li, a, i, txtValue, test;

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
    // test = `
    // <li> <a href=""> ${countrie.name}</a></li>`;
    // console.log(test);
    tableauvide.push(countrie);
    newli += `
    <li>
      <img src="${countrie.flag} " alt=""> 
      <a href="">la population de ${countrie.name}</a>
      <a href="">est de ${countrie.population} habitants</a>
      <a href="">Sa capital est ${countrie.capital}</a>
      <a href="">Sa monaie est ${
        (/^[AEIOUY]/.test(countrie.currencies[0].name) ? "l'" : 'le ') +
        countrie.currencies[0].name
      }</a>
      <a href="">Ce pays est situé en ${countrie.region} plus précisément en  ${
      countrie.subregion
    }</a>
    <a href="">les frontiéres sont  ${countrie.borders}</a>
    </li>`;
  });
  ul.innerHTML = newli;
});

function myFunction() {
  input = document.getElementById('myInput');
  filter = input.value;
  li = document.getElementsByTagName('li');
  for (i = 0; i < tableauvide.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    console.log('filter ' + filter);
    console.log('name ' + tableauvide[i].name);
    console.log('includes ' + tableauvide[i].name.includes(filter));
    if (tableauvide[i].name.toLowerCase().includes(filter)) {
      li[i].style.display = '';
      console.log('bb');
    } else {
      li[i].style.display = 'none';
      console.log('none');
    }
  }
}

// txtValue.toUpperCase().indexOf(filter) > -1
