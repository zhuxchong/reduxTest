import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import store from "./store";
import { connect } from "react-redux";
import { transferData } from "./store/actionCreator";
import axios from "axios";
class ReduxTest extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = store.getState();
  // }
  render() {
    return <div className="App">{this.props.test}</div>;
  }
  componentDidMount() {
    axios.get("/api/detail.json").then(res => {
      console.log(res);
      this.props.getData(res);
    });
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    test: state.test
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getData(data) {
      const action = {
        type: "GET_DATA",
        value: data.data.branch
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTest);
