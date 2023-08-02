import type Quote from "../types/Quote";

export async function getRandomQuote(quotes: Promise<Quote[]>): Promise<Quote> {
  const localQuotes = await quotes;
  const length = localQuotes.length;
  const randomIndex = Math.floor(Math.random() * length);

  return localQuotes[randomIndex];
}
