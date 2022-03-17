import logo from "./logo.svg";
import "./App.css";
import Header from "./comps/Header";
import { datas } from "./data";
import Card from "./comps/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="CardContainer">
        {datas.map((data, index) => (
          <Card
            num={index + 1}
            title={data.title}
            sub={data.sub}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
