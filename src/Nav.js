import "./Nav.css";

export default function Nav({ setData }) {
  function handleClick(event) {
    const lat = Number(document.querySelector("#lat").value);
    const long = Number(document.querySelector("#long").value);
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
  }

  return (
    <div className="boxes">
      <label htmlFor="lat"> Latitude:</label>
      <input type="number" id="lat" placeholder="00.00" />
      <label htmlFor="lat"> Longitude:</label>
      <input type="number" id="long" placeholder="00.00" />
      <input type="submit" value="lets see!" onClick={handleClick} />
    </div>
  );
}
