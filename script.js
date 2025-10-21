const btnHtml = document.querySelector(".btn");
const imgHtml = document.querySelector("img");
const inputHtml = document.getElementById("input");
const errorHtml = document.getElementById("error")

    function fetchNewCatGif() {
      errorHtml.style.display = "none";
      errorHtml.textContent = "";

const searchTerm = inputHtml.value || "cats";
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=lbTbjqF93pBniUzI9ZV23WcwcZq7Da7G&s=${searchTerm}`
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`API-fel: ${response.status} (t.ex. ogiltigt sökord eller API-nyckel)`);
      }
      return response.json();
    })
    .then(function (response) {
      if (!response.data || !response.data.images || !response.data.images.original) {
        throw new Error("Ingen bild hittades för sökordet");
      }
      imgHtml.src = response.data.images.original.url;
      inputHtml.value = ""; 
    })
    .catch(function (error) {
      errorHtml.style.display = "block"; 
      errorHtml.textContent = `Whoops! ${error.message}`;
      imgHtml.src = "#"; 
    });
}

fetchNewCatGif()

btnHtml.addEventListener("click", fetchNewCatGif)

inputHtml.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetchNewCatGif();
  }
})