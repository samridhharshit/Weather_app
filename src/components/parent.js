import React from "react";

import Weather from "./Weather";
import Header from "./Header";
import FormClass from "./Form";

const openWeather_api_key = "db886590ee07708c8bd6553bb85c7905";

class Parent extends React.Component {
  state = {
    data: {},
    className: "beforeGrow"
  };

  getweather = async event => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${openWeather_api_key}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.coord);
        this.setState({ data });
      })
      .catch(err => console.log(err));

    // const data = await api_call.json();

    var d = document.getElementById("weatherid");
    d.className += " growClass";
    this.setState({ className: d.className });
  };

  render() {
    return (
      <div className="container-fluid parent">
        <Header />
        <FormClass GetWeather={this.getweather} />
        <Weather data={this.state.data} className={this.state.className} />
      </div>
    );
  }
}

export default Parent;
