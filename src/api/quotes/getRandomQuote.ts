export async function getRandomQuote(quotes) {
  const localQuotes = await quotes;
  const length = localQuotes.length;
  const randomIndex = Math.floor(Math.random() * length);

  return localQuotes[randomIndex];
}
