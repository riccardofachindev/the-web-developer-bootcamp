const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
import { useEffect } from "react";
import { useState } from "react"

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: '', author: '' });

    useEffect(() => {
        async function getMyQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const quote = jsonResponse.quote;
            setQuote(quote);
        };
        getMyQuote();
    }, [])

    async function getRandomQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const quote = jsonResponse.quote;
        setQuote(quote);
    }

    return (
        <>
            <button onClick={getRandomQuote}>Get quote</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </>
    )
}