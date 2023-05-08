/* eslint-disable no-undef */
import Axios from 'axios'
const basePath = 'https://finnhub.io/api/v1'

export const searchSymbols = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
    try {
        const response = await Axios.get(url)
        return await response.data
    } catch (err) {
        console.log(err)
    }


    return await response.json()
}

export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`

    try {
        const response = await Axios.get(url)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}


export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`

    try {
        const response = await Axios.get(url)
        return await response.data
    } catch (err) {
        console.log(err)
    }
}

export const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`

    try {
        const response = await Axios.get(url)
        return await response.data
    } catch (err) {
        console.log(err)
    }

}