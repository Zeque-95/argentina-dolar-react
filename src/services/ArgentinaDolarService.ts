
import { AxiosApi as Axios } from "../config/Axios";
import { dolar } from "../domain/dolar";

export class ArgentinaDolarService {

  static async getHome(): Promise<dolar[]> {
    // return Axios.get<dolar[]>("/main/")
    // .then((response) => {
    //   const { data } = response;
    //   console.log(data);
    //   return data;
    // })
    return new Promise<dolar[]>((resolve, reject) => {
    resolve([
      {
        "buys": 233.02,
        "sale": 243.02,
        "agency": 349,
        "name": "Dolar Oficial",
        "variation": 0.15,
        "saleZero": true,
        "decimals": 2
      },
      {
        "buys": 483,
        "sale": 488,
        "agency": 310,
        "name": "Dolar Blue",
        "variation": 0.21,
        "saleZero": true,
        "decimals": 2
      },
      {
        "buys": null,
        "sale": 0,
        "agency": 311,
        "name": "Dolar Soja",
        "variation": 0,
        "saleZero": true,
        "decimals": 3
      },
      {
        "buys": 486.04,
        "sale": 498.08,
        "agency": 312,
        "name": "Dolar Contado con Liqui",
        "variation": 10.04,
        "saleZero": true,
        "decimals": 2
      },
      {
        "buys": 478.3,
        "sale": 475.82,
        "agency": 313,
        "name": "Dolar Bolsa",
        "variation": 6.55,
        "saleZero": true,
        "decimals": 3
      },
      {
        "buys": null,
        "sale": 0,
        "agency": 399,
        "name": "Bitcoin",
        "variation": -100,
        "saleZero": true,
        "decimals": 3
      },
      {
        "buys": null,
        "sale": 425.29,
        "agency": 406,
        "name": "Dolar turista",
        "variation": 0.15,
        "saleZero": true,
        "decimals": 2
      }
    ])
    })
  }

}
