function fetchQuote() {
  const quoteId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${quoteId}`;

  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (quotes) {
      const container = document.getElementById("simpsons-quotes");

      if (quotes.length === 0) {
        container.innerHTML = "Pas de quote!";
        return;
      }

      const firstQuote = quotes[0];

      // Build a block of HTML
      const quoteHtml = `
          <p><strong>${firstQuote.character}</strong></p>
          <img src="${firstQuote.image}" />
          <p><strong>${firstQuote.quote}</strong></p>
        `;

      container.innerHTML = quoteHtml;
    });
}

fetchQuote();
