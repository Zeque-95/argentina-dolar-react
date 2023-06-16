
import { AxiosApi as Axios } from "../config/Axios";
import { News } from "../domain/News";

export class EconomyNewsService {

  static async getNews(): Promise<News[]> {
     return Axios.get<News[]>("/news/economy/page/1")
     .then((response) => {
       const { data } = response;
       return data;
     })
    
  }
}
