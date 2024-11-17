const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
import { useEffect } from "react";
import { useState } from "react"

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getMyQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const quote = jsonResponse.quote;
            setQuote(quote);
            setIsLoading(false);
        };
        getMyQuote();
    }, [])

    return (
        <>
            <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>Is loading..</p>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </>
    )
}