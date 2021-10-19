import "./App.css";
import { useState } from "react";
import Title from "./Title";
import Main from "./Main";
import Nav from "./Nav";
import References from "./References";

export default function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <Title />
      <Main data={data} />
      <Nav setData={setData} />
      <References />
    </div>
  );
}
