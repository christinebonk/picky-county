import React, { Component } from "react";
import API from "../../utils/App.js";
import TopBar from "../../components/TopBar"

class Add extends Component {

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
          houses = houses.map(house => {
            return house.team;
          });
          console.log(houses);
          this.setState({houses: houses}, () => {});
        })
        .catch(err => console.log(err));
    };

  render() {
    
    return (
      <div>
        <TopBar/>
        <main>
          {/*Form*/}
          <form>

            {/*Form Top*/}
            <div className="form-top">
              {/*Houses Input*/}
              <div className="form-input">
                <h4>House</h4>
                <select id="show" className="houses">
                  {this.state.houses.map (house => (
                <option key={house} value={house}
                  >{house}</option>
                  ))}
                </select>
              </div>
            </div>

          {/*Form Bottom*/}
          <div className="form-bottom">
              {/*Description Input*/}
              <div className="form-input description">
                <div className="description-input">
                  <h4>Description</h4>
                  <label className="visually-hidden" htmlFor="description">Description</label>
                  <input id="description" name="description" type="text" />
                </div>
                <div className="item-amount-input">

                {/*Points Input*/}
                  <h4>Points</h4>
                  <label className="visually-hidden"  htmlFor="points">Points</label>
                  <input id="points" name="points" type="text" />
              </div>
          </div>
        </div>
        <div className="form-end">
           <input type="date"  className="datepicker"/>
        </div>
        <div> 
              <button className="btn" onClick={this.props.submitTransaction}>Submit</button>
            
            </div>
          </form>
        </main>
      </div>
      );
    }
  }

export default Add;
