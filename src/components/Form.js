import React from "react";

// import { Form, Button, FormGroup } from "reactstrap";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class Formclass extends React.Component {
  state = {
    address: null
  };

  // autocomplete functionality
  handleChange = address => {
    this.setState({ address }, () => {
      console.log(this.state.address);
    });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        this.setState({ address: results[0].formatted_address }, () => {
          this.props.setCityCountry(this.state.address);
        });
        // console.log(results[0].formatted_address);
        // console.log(results[0].address_components[3].long_name);
        // console.log(results[0].address_components[0].long_name);
        getLatLng(results[0]);
      })
      .then(latLng => {
        console.log("Success", latLng);
      })
      .catch(error => console.error("Error", error));
  };

  // classes used :- form-container and form

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        className="form-container"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="form">
            <input
              className="form"
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default Formclass;
