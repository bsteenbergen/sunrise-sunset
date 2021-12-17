import "./References.css";
import sun from "./sun.png";

export default function References() {
  return (
    <div>
      <span className="dot" id="dot1"></span>
      <span className="dot" id="dot2"></span>
      <div className="footer">----</div>
      <img src={sun} alt="sun" />
      <ul>
        <h4>Here's some examples of places:</h4>
        <li>Los Angeles: 35.05&#176; N, 118.24&#176; W</li>
        <li>New York: 40.71&#176; N, 74.00&#176; W</li>
        <li>Portland: 45.51&#176; N, 122.67&#176; W</li>
        <li>Barcelona: 41.38&#176; N, 2.16&#176; E</li>
        <li>Cape Town: 33.92&#176; S, 18.42&#176; E</li>
        <li>Tokyo: 35.67&#176; N, 139.65&#176; E</li>
      </ul>
    </div>
  );
}
