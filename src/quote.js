const remoteURL = "https://type.fit/api/quotes"

export const getQuote = () => {
    return fetch(remoteURL)
    .then(res => res.json())
  }
