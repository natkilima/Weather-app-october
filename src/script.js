function watch() {
  let name = prompt("What is your first name?");
  let foreign = prompt("Do you like Foreign language films?");

  if (foreign === "No" || foreign === "no" || foreign === "NO") {
    alert(
      "Based on your answers, " +
        name +
        ", I recommend you have a look at the films listed here: https://www.harpersbazaar.com/culture/film-tv/g10214512/best-english-british-movies/ "
    );
  } else {
    alert(
      "Based on your answers, " +
        name +
        ", I recommend you have a look at the films listed here : https://www2.bfi.org.uk/news-opinion/news-bfi/lists/top-your-watchlist-foreign-language-comedies "
    );
  }
}

let watchButton = document.querySelector("button");
watchButton.addEventListener("click", watch);
