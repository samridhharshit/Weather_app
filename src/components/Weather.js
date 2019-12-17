import React from "react";

const id = "weatherid"

class Weather extends React.Component {
  render() {
    const data = { ...this.props.data };
    // if (typeof data.weather == "object") {
    //   console.log(data.weather[0].description);
    // }

    // var d = document.getElementById(id);
    // d.className += "otherClass"

    return (
      <div className={`${this.props.className} container-fluid`} id={`${id}`} >
        <div className="row" style={{width : "inherit"}}>
        {typeof data.main == "object" ? (
          <div className="details col-sm-6">
            <p>Temp: {data.main.temp}</p>
            <p>Max-Temp: {data.main.temp_max}</p>
            <p>Min-Temp: {data.main.temp_min}</p>
            <p>Humidity: {data.main.humidity}</p>
          </div>
        ) : null}
        {typeof data.weather == "object" ? (
          <div className="details col-sm-6">
            <p>Description: {data.weather[0].description}</p>
          </div>
        ) : null}
        </div>
      </div>
    );
  }
}

export default Weather;
