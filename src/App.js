import React from "react";
import "./App.css";

import Parent from "./components/parent";

class App extends React.Component {
  state = {
    lat: null,
    lon: null
  };

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    ScriptLoader(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8GSuIxqROHt1SCKh0KTDaIMO-g3l_8Y4&callback=initMap"
    );
    window.initMap = this.initMap;
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

function ScriptLoader(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}
// the above function will create a cdn for google map as normally done in plain html just like :-
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>

export default App;
