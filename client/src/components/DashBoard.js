import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets:[]
        }
    }

    componentDidMount = () => {
        axios.get("/pets")
        .then(res => {
            this.setState({pets: res.data.pets})
        }).catch(err => {
            console.log(err);
        });
    }


  render() {
    return (
      <div>
          <fieldset>
              <legend>These pets are looking for a home!</legend>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map(pet => 
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                    <Link to={"/pet/" + pet._id}><button>Details</button></Link>
                                    <Link to={"/pet/"+ pet._id+"/edit"}>
                                    <button>Edit</button></Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>



                </table>

          </fieldset>
      </div>
    )
  }
}

export default DashBoard
