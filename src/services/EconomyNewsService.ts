
import { AxiosApi as Axios } from "../config/Axios";
import { News } from "../domain/News";

export class EconomyNewsService {

  static async getNews(): Promise<News[]> {
     return Axios.get<News[]>("/news/economy")
     .then((response) => {
       const { data } = response;
       return data;
     })
  }


  static async getNewsPage(
    page : number
  ): Promise<News[]> {
    const url = `/news/economy/page/${page}`;
    return Axios.get<News[]>(url)
    .then((response) => {
      const { data } = response;
      return data;
    })
 }

}
