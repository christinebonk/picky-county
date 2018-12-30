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
          let houses = res.data;
          houses.map(house => {
            house.points = 0
          }); //add points information to object
          this.setState({houses: houses}, () => {});
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
          houses.map(house => {
            pointsData.forEach(point => {
              if(point.team === house.team) {
                house.points += point.points;
              }
            });
          });
          this.setState({houses: houses}, () => {});
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
