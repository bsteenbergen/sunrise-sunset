import "./Main.css";

export default function Main({ data }) {
  return data.results ? (
    <div id="results">
      <p id="sunrise"> {data.results.sunrise} </p>
      <p id="sunset"> {data.results.sunset} </p>
    </div>
  ) : (
    " "
  );
}
