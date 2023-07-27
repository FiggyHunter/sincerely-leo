export async function getQuotes() {
  const res = await fetch("https://cdn.leotg.com/api/quotes");
  const { data: quotes } = await res.json();

  const returnedQuotes = [];

  quotes.forEach((quote) =>
    returnedQuotes.push({
      quote: quote.attributes.Quote,
      author: quote.attributes.Author,
    })
  );

  return returnedQuotes;
}
