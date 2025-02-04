import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let val;
let setplace;
function Form1() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [radius, setRadius] = useState("120");
  const [zip, setZip] = useState("");
  setplace=function(x)
  {
    setCity(x);
  }
  const nav = useNavigate();
  useGSAP(() => {
    gsap.from(".form1", {
      scale: 0,
      opacity: 0,
      duration: 1.4,
      delay: 0.5,
    });
  });

  function btnover(event) {
    event.target.style.backgroundColor = "#9c2a16";
  }

  function btnout(event) {
    event.target.style.backgroundColor = "#e0472c";
  }

  function submit(event) {
    event.preventDefault();
    val=1;
    if(rating)
    nav(`/data/${city}/${radius}/${rating}`);
    else
    nav(`/data/${city}/${radius}/false`);

  }

  return (
    <div className="form1" style={{ position: "relative" }}>
      <div style={{ color: "#e0472c", position: "absolute", top: "3%", left: "3%" }}>
        Let's Start
      </div>
      <form
        className="row g-3 needs-validation"
        noValidate
        style={{ padding: "auto", marginTop: "15px" }}
        onSubmit={submit}
      >
        <div className="col-md-5 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control city"
            id="validationTooltip03"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <div className="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip02" className="form-label">
            Country (Optional)
          </label>
          <input
            type="text"
            className="form-control country"
            id="validationTooltip02"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">
            Star rating (optional)
          </label>
          <select
            className="form-select rating"
            id="validationTooltip04"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option selected disabled value="">
              Ratings..
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={"1h"}>4</option>
            <option value={"2h"}>5</option>
            <option value={"3h"}>7</option>

          </select>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">
            Radius
          </label>
          <select
            className="form-select radious"
            id="validationTooltip04"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            required
          >
            <option value={"30"}>30km</option>
            <option value={"60"}>60km</option>
            <option value={"90"}>90km</option>
            <option selected  value={"120"}>120km</option>
            <option value={"160"}>160km</option>
            <option value={"190"}>190km</option>
            <option value={"250"}>250km</option>
            <option value={"400"}>400km</option>
            <option value={"800"}>800km</option>
            <option value={"1200"}>1200km</option>
            <option value={"1500"}>1500km</option>
          </select>
        </div>
        <div className="col-md-3 position-relative" style={{ display: "inline-block" }}>
          <label htmlFor="validationTooltip05" className="form-label">
            Zip (Optional)
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip05"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <div className="invalid-tooltip">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary form1btn"
            onMouseOver={btnover}
            onMouseOut={btnout}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form1;
export{val,setplace};
