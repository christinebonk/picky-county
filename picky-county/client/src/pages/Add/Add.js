import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"

class Add extends Component {

    state = {
      points: []
    }

    componentDidMount() {
    };

  render() {
    
    return (
      <div>
        <TopBar/>
        <main>

        </main>
      </div>
      );
    }
  }

export default Add;
