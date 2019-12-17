import React from "react";
import "./App.css";

import Parent from "./components/parent";

class App extends React.Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    ScriptLoader(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8GSuIxqROHt1SCKh0KTDaIMO-g3l_8Y4&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 25.61, lng: 85.12 },
      zoom: 3
    });
  };

  render() {
    return (
      <div className="App">
        <Parent />
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
