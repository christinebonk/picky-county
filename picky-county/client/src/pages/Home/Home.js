import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"
import TeamBox from "../../components/TeamBox/"

class Home extends Component {

    state = {
      houses: [{
        name: "Blue",
        color: "#006699",
        points: 100,
        ranking: 1
        },
        {
          name: "Red",
          color: "#990033",
          points: 50,
          ranking: 2
        },
        {
          name: "Gold",
          color: "#CCCC99",
          points: 75,
          ranking: 3
        }, {
          name: "Silver",
          color: "#CCCCCC",
          points: 88,
          ranking: 4
        }

        ]
    }


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
                name = {house.name}
                color = {house.color}
                points = {house.points}
                ranking = {house.ranking}
                key = {house.name}
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
