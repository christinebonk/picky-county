import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"

class Home extends Component {

    state = {
      points: []
    }

    componentDidMount() {
      this.getPoints();
    };

    //retrieve points data
    getPoints = () => {  
      API.getPoints()
        .then(res => {
          let pointsData = res.data;
          this.setState({points: pointsData}, () => {});
        })
        .catch(err => console.log(err));
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




export default Home;
