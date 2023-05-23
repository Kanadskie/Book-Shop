export class Currency {

  getRate() {

    return fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')

      .then((response) => {

        if (!response.ok) {

          throw new Error('HTTP error, status = ' + response.status)

        }

        return response.json()

      })

      .then((currency) => {

        let rate = currency.cbrf.data[0][currency.cbrf.columns.indexOf('CBRF_USD_LAST')]

        return rate

      })

      .catch((error) => {

        console.error(error)

      })

  }
  
  formatRate() {

    let usdRate = currentRate.getRate()

    return usdRate
    
  }
  
}

let currentRate = new Currency()

let rate = currentRate.formatRate()

export default rate