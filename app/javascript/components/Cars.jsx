import React from "react";
import { Link } from "react-router-dom";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    const url = "/api/v1/cars/index";
    fetch(url)
      .then((response) => {
        response.ok ? response.json() : response.status;
      })
      .then((response) => this.setState({ cars: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {}
}

export default Cars;
