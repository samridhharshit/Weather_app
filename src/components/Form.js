import React from "react";

import { Form, Button, FormGroup } from "reactstrap";
// import autosearch from '/public/autosearch';

class Formclass extends React.Component {

  handleChange = event => {
    console.log(event.target.value);
    
  };

  render() {
    return (
      <div className="form-container">
        <Form onSubmit={this.props.GetWeather} className="form">
          <FormGroup>
          <input type="text" name="city" placeholder="city" required />
          </FormGroup>
          <FormGroup>
            <input type="text" name="country" placeholder="Country" required />
          </FormGroup>
          <Button color="info" type="submit">
            <span> Get Weather...</span>
          </Button>
        </Form>
      </div>
    );
  }
}

export default Formclass;
