import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"
import $ from "jquery";
import House from "../../components/House";
import { Col, Row, Container } from "../../components/Grid";


class Houses extends Component {

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
          console.log(houses);
          this.setState({houses: houses}, () => {});
        })
        .catch(err => console.log(err));
    };

    addHouse = event => {
      event.preventDefault();
      const color = $("#house-colour").val().trim();
      const team = $("#house-name").val().trim();
      const data = {
        color: color,
        team: team, 
      }
      API.addHouse(data);
      $("#house-colour").val("");
      $("#house-name").val("");
    }

    deleteHouse = (id) => {
      console.log(id);
      API.deleteHouse(id)
      .then(() => {
        this.getHouses();
      }) 
    }

  render() {
    
    return (
      <div>
        <TopBar/>
        <main>
          <Row>
            <h2>Edit Existing House</h2>
            <div className="houses-container">
              {this.state.houses.map (house => ( 
                <House
                color = {house.color}
                name = {house.team}
                key = {house.id}
                deleteHouse = {this.deleteHouse}
                id = {house.id}
                />
                ))}
            </div>
          </Row>
          <Row>
            {/*Form*/}
            <form>
              <h2>Create New House</h2>
              {/*Form Top*/}
              <div className="form-top">

                {/*House Name Input*/}
                <div className="form-input">
                  <h4>House Name</h4>
                  <label className="visually-hidden" htmlFor="house-name">House Name</label>
                  <input id="house-name" name="house-name" type="text" />
                </div>
              </div>

            {/*Form Bottom*/}
              <div className="form-bottom">
                {/*House cOlour Input*/}
                <div className="form-input house-colour">
                  <div className="house-colour-input">
                    <h4>House Colour</h4>
                    <label className="visually-hidden" htmlFor="house-colour">Description</label>
                    <input id="house-colour" placeholder="Input hex colour including #" name="house-colour" type="text" />
                  </div>
                </div>
              </div>
          
              <div> 
                <button className="btn" onClick={this.addHouse}>Submit</button> 
              </div>
            </form>
          </Row>
        </main>
      </div>
      );
    }
  }

export default Houses;
