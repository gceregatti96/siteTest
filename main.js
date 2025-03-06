//const url = "https://api.chucknorris.io/jokes/random";

function gett(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();

  return request.responseText;
}

function main() {
  data = gett("https://api.chucknorris.io/jokes/random");
  usuarios = JSON.parse(data);
  console.log(usuarios.value);
}

main();