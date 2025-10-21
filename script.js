const btnHtml = document.querySelector(".btn");


      const img = document.querySelector("img");
      fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=lbTbjqF93pBniUzI9ZV23WcwcZq7Da7G&s=cats"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          img.src = response.data.images.original.url;
        });
