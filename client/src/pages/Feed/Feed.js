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
          pointsData.sort(function(a, b) { //sort array by date
              return new Date(b.date) - new Date(a.date);
          });
          pointsData.map(point => {
            point.date = this.formatDate(point.date);

          })
          console.log(pointsData);
          this.setState({points: pointsData}, () => {});
        })
        .catch(err => console.log(err));
    };

    formatDate = (date) => {
      let selectedDate = new Date(date);
      const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
      ];
      const dayOfWeek = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"
      ]
      const day = selectedDate.getDate() + 1;
      const monthIndex = selectedDate.getMonth();
      const weekIndex = selectedDate.getDay() + 1;
      return dayOfWeek[weekIndex] + ', ' + monthNames[monthIndex] + ' ' + day;
    }

  render() {
    
    return (
      <div>
        <TopBar/>
        <main>
          <h2>Points Feed</h2>
          {this.state.points.map((point, index) =>( 
            <Card 
              description = {point.description}
              points = {point.points}
              team = {point.team}
              key = {index}
              date = {point.date}
            />
            ))}
        </main>
      </div>
      );
    }
  }

export default Feed;
