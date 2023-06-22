import * as React from "react";
import Pagination from '@material-ui/lab/Pagination';
import { EconomyNewsService } from "../services/EconomyNewsService";
import { News } from "../domain/News";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { NewsComponent } from "../components/NewsComponent";

export const EconomyNewsPage: React.FC = () => {

  const [loading, setLoading] = React.useState<boolean>(false);
  const [news, setNews] = React.useState<News[]>([]);
  const [page , setPage] = React.useState<number>(1);

  React.useEffect(() => {
    setLoading(true);
    EconomyNewsService.getNewsPage(page) 
      .then((e) => {
        setNews(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]); 

  if (loading) {
    return (
      <Backdrop open={true} style={{ zIndex: 2147483647 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {news.map((value, index) => {
          return <NewsComponent value={value} key={index} />;
        })}
      </div>
      <Pagination 
        style={{marginTop : "20px"}}
        page={page}
        count={19} 
        color="secondary"
        onChange={((event: React.ChangeEvent<unknown>, page: number)=>{
          setPage(page);
        })}
      />
    </>
  );
};
