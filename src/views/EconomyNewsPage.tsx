import * as React from "react";
import { EconomyNewsService } from "../services/EconomyNewsService";
import { News } from "../domain/News";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { NewsComponent } from "../components/NewsComponent";

export const EconomyNewsPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [news, setNews] = React.useState<News[]>([]);

  React.useEffect(() => {
    setLoading(true);
    EconomyNewsService.getNews()
      .then((e) => {
        console.log(e);
        setNews(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
    </>
  );
};
