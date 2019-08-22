import React from "react";

import Weather from "./components/Weather";
import Header from "./components/Header";
import FormClass from "./components/Form";

const api_key = "db886590ee07708c8bd6553bb85c7905";

class App extends React.Component {
  state = {
    data: {},
    className: "beforeGrow"
  };

  getweather = async event => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`
    );

    const data = await api_call.json();
    this.setState({ data });

    var d = document.getElementById("weatherid");
    d.className += " growClass";
    this.setState({className: d.className});

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

export default App;
