import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"
import TeamBox from "../../components/TeamBox/"

class Home extends Component {

    state = {
      houses: []
    }

    componentDidMount() {
      this.getHouses();
    };

    //retrieve houses data
    getHouses = () => {  
      API.getHouses()
        .then(res => {
         this.setState({houses: res.data}, () => {});
         this.getPoints();
        })
        .catch(err => console.log(err));
    };

    //retrieve houses data
    getPoints = () => {  
      API.getPoints()
        .then(res => {
          let houses = this.state.houses;
          let pointsData = res.data;
          console.log(pointsData);
          console.log(houses);
          // this.setState({houses: res.data}, () => {});
        })
        .catch(err => console.log(err));
    };


  render() {
    
    return (
      <div>
        <TopBar/>
        <main>
          <div className="team-container-header">
            <img alt="placeholder" src="https://via.placeholder.com/150" />
            <h2>Pickering College House Points</h2>
          </div>
          <section className="team-container">
            {this.state.houses.map (house => (
              <TeamBox 
                name = {house.team}
                color = {house.color}
                points = {house.points}
                ranking = {house.ranking}
                key = {house.team}
              />
              ))

            }
          </section>
        </main>
      </div>
      );
    }
  }




export default Home;
