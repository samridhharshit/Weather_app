import React from "react";

import { Form, Button, FormGroup } from "reactstrap";

class Formclass extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Form onSubmit={this.props.GetWeather} className="form">
          <FormGroup>
            <input type="text" name="city" placeholder="City" />
          </FormGroup>
          <FormGroup>
            <input type="text" name="country" placeholder="Country" />
          </FormGroup>
            <Button outline color="info" type="submit">
              <span> Get Weather...</span>
            </Button>
        </Form>
      </div>
    );
  }
}

export default Formclass;
