
import { AxiosApi as Axios } from "../config/Axios";
import { dolar } from "../domain/dolar";

export class ArgentinaDolarService {

  static async getHome(): Promise<dolar[]> {
     return Axios.get<dolar[]>("/main/")
     .then((response) => {
       const { data } = response;
       console.log(data);
       return data;
     })
    
  }
}
