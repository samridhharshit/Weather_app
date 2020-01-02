import React from "react";
import "./App.css";

import Parent from "./components/parent";

// console.log(process.env.REACT_APP_GOOGLE_API_KEY);

class App extends React.Component {
  state = {
    lat: null,
    lon: null
  };

  componentDidMount() {
    this.renderMap();
    // loadscript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAeU5A0CyPpl1i80xsQQ1oHwcAutLTacF4&callback=initMap&libraries=places&fields=city,country`)
  }

  renderMap = () => {
    
    this.initMap();
  };

  initMap = async (lat, lon) => {
    await this.setState({ lat, lon });

    const center = { lat: this.state.lon, lng: this.state.lat };
    console.log(center);

    if (this.state.lat && this.state.lon) {


      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 3
      });

      var marker = new window.google.maps.Marker({
        position: center,
        title: "Hello World!"
      });

      // To add the marker to the map, call setMap();
      marker.setMap(map);

    } else {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.972442, lng: 77.580643 },
        zoom: 3
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Parent LatLon={this.initMap} />
        <div id="map"></div>
      </div>
    );
  }
}

// function loadscript(url) {
//   var index = window.document.getElementsByTagName("script")[0]
//   var script = window.document.createElement("script")
//   script.src = url
//   index.parentNode.insertBefore(script, index)
// }

export default App;
