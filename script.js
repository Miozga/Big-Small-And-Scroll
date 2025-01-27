document.body.style.height = "10000px";

const squere = document.createElement("div"); //tworzymy div
document.body.appendChild(squere);

let grow = true; // tzw flaga, zawsze jest true albo false
let size = 50; //deklarujemy początkową wielkość kwadratu

squere.style.height = size + "px";
//zamiast danych kopiujemy zmienną, konkatenacja i tworzymy string z px  co może
window.addEventListener("scroll", function () {
  if (size >= window.innerHeight / 2) {
    grow = !grow;
    squere.style.backgroundColor = "red";
  } else if (size <= 0) {
    grow = !grow;
    squere.style.backgroundColor = "green";
  }

  if (grow) {
    size += 5;

    squere.style.height = size + "px";
  } else {
    size -= 5;

    squere.style.height = size + "px";
  }
});
