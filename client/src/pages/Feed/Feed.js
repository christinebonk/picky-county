import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"
import Card from "../../components/Card"

class Feed extends Component {

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
          console.log(pointsData);
          this.setState({points: pointsData}, () => {});
        })
        .catch(err => console.log(err));
    };

  render() {
    
    return (
      <div>
        <TopBar/>
        <main>
          {this.state.points.map((point, index) =>( 
            <Card 
              description = {point.description}
              points = {point.points}
              team = {point.team}
              key = {index}
            />
            ))}
        </main>
      </div>
      );
    }
  }

export default Feed;
