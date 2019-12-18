import React from "react";

import Weather from "./Weather";
// import Header from "./Header";
import FormClass from "./Form";

const openWeather_api_key = "db886590ee07708c8bd6553bb85c7905";
// var city = "", country = "";

class Parent extends React.Component {
  state = {
    data: {},
    className: "beforeGrow",
    city: "",
    country: ""
  };

  setCityCountry = async value => {
    // value.preventDefault();

    // var arr = value.split(", ");
    // console.log(arr);
    await this.setState({ city: value });
    // console.log("city " + this.state.city + " country " + this.state.country);
    // city = arr[0];
    // country = arr[2];
    this.getweather();
  };

  getweather = async event => {
    // event.preventDefault();

    if (this.state.city) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${openWeather_api_key}&units=metric`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.props.LatLon(data.coord.lon, data.coord.lat);
          this.setState({ data });
        })
        .catch(err => console.log(err));
    }

    // const data = await api_call.json();

    var d = document.getElementById("weatherid");
    d.className += " growClass";
    this.setState({ className: d.className });
  };

  render() {
    return (
      <div className="container-fluid parent">
        {/* <Header /> */}
        <FormClass
          GetWeather={this.getweather}
          setCityCountry={this.setCityCountry}
        />
        <Weather data={this.state.data} className={this.state.className} />
      </div>
    );
  }
}

export default Parent;
