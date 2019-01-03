import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"
import $ from "jquery";

class Houses extends Component {

    state = {
      house: []
    }

    componentDidMount() {
      this.getHouses();
    };

    //retrieve houses data
    getHouses = () => {  
      API.getHouses()
        .then(res => {
          let house = res.data;
          console.log(house);
          this.setState({house: house}, () => {});
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



  render() {
    
    return (
      <div>
        <TopBar/>
        <main>
          {/*Form*/}
          <form>
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
                  <input id="house-colour" name="house-colour" type="text" />
                </div>
              </div>
            </div>
            <div> 
              <button className="btn" onClick={this.addHouse}>Submit</button> 
            </div>
          </form>
        </main>
      </div>
      );
    }
  }

export default Houses;
