const btnHtml = document.querySelector(".btn");
const imgHtml = document.querySelector("img");
const inputHtml = document.getElementById("input");

    function fetchNewCatGif() {
      const searchTerm = inputHtml.value || "cats";
      fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=lbTbjqF93pBniUzI9ZV23WcwcZq7Da7G&s=${searchTerm}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          imgHtml.src = response.data.images.original.url;
        })
        .catch(function (error) {
          console.error("Whoops. Sorry:", error);
          imgHtml.src = "#";
        });
    }

fetchNewCatGif()

btnHtml.addEventListener("click", fetchNewCatGif)