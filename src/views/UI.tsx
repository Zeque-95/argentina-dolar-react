import * as React from "react";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { ListItem } from "../components/ListItem";
import { Dropdown } from "../components/Dropdown";
import { RouteComponentProps, withRouter } from "react-router-dom";

const UI : React.FC<RouteComponentProps> = (props) => {

  const [selected, setSelected] = React.useState<string>("");

  const renderDolarMenuItem = () => {
    return (
      <ListItem>
        <Dropdown
          left
          buttonText="Dólar"
          name="1"
          nameSelected={selected}
          onClickMenu={() => {
            setSelected("1");
            props.history.push("/home");
          }}
          dropdownList={[]}
        />
      </ListItem>
    );
  };

  const renderDolarBlueMenuItem = () => {
    return (
      <ListItem>
        <Dropdown
          left
          buttonText="Dólar blue"
          name="2"
          nameSelected={selected}
          onClickMenu={() => {
            setSelected("2");
          }}
          dropdownList={[]}
        />
      </ListItem>
    );
  };

  const renderOtherCoinsMenuItem = () => {
    return (
      <ListItem>
        <Dropdown
          left
          buttonText="Otras Monedas"
          name="9"
          nameSelected={selected}
          onClickItem={(param: string) => {
            setSelected("9");
          }}
          dropdownList={[
            "Euro",
            "Real Brasileño",
            "Libra Esterlina",
            "Peso Uruguayo",
            "Pesp Chileno",
          ]}
        />
      </ListItem>
    );
  };

  const renderNewsMenuItem = () => {
    return (
      <ListItem>
        <Dropdown
          left
          buttonText="Noticias"
          name="10"
          nameSelected={selected}
          onClickItem={(param: string) => {
            setSelected("10");
            if(param === "Noticias del dólar") {
              props.history.push("/news/dollar-news");
            }
          }}
          dropdownList={[
            "Noticias del dólar",
            "Economia",
            "Tecnología",
            "Viajes y Turismo",
            "Finanzas",
          ]}
        />
      </ListItem>
    );
  };

  return (
    <Header
      tooltipText="Dolar App"
      leftLinks={
        <List>
          {renderDolarMenuItem()}
          {renderDolarBlueMenuItem()}
          {renderOtherCoinsMenuItem()}
          {renderNewsMenuItem()}
        </List>
      }
    />
  );
};
export default withRouter(UI);
