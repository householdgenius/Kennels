import React from "react"


export const QuoteCard = ({quote}) => (
    <section className="quote">
        <h3 className="quote__name">Quote: {quote.text}</h3>
        <div className="quote__breed">Author: {quote.author}</div>
    </section>
)