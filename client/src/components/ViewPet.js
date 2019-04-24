import React, { Component } from 'react';
import axios from 'axios';


class ViewPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: "",
                likes: 0,
            },
            errors:{},
            isliked: false
        }
    }

    componentDidMount = () => {
        axios.get(`/pets/${this.props.match.params._id}`)
        .then(res => {
            this.setState({pet: res.data.pet});
        }).catch(err => {
            console.log(err);
        });
    }

    likePet = (e) =>{
        e.preventDefault();
        let l = this.state.pet.likes;
        l+=1;
        this.setState({pet: {...this.state.pet, likes: l}}, () => {
            axios.put(`/pets/${this.props.match.params._id}`, this.state.pet)
            .then(res => {
            console.log(res);
            if(res.data.errors) {
                this.setState({errors: res.data.errors.errors});
            }
        }).catch(err => {
            console.log(err);
        });
        });
        this.setState({isliked : true});
    }

    delete = (e) => {
        axios.delete(`/pets/${this.props.match.params._id}`)
        .then(res => {
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        });
    }


  render() {
    return (
      <div>
          <fieldset>
          <legend>Details about {this.state.pet.name}</legend>
          
            <p>
                Name: &nbsp; &nbsp; 
                <span>&nbsp; {this.state.pet.name}</span> 

            </p>
            <p>
                Type: &nbsp; &nbsp; 
                <span>&nbsp; {this.state.pet.type}</span> 
            </p>
            <p>
                Description: &nbsp; &nbsp; 
                <span>&nbsp; {this.state.pet.description}</span> 
            </p>
            <p>Skills:

                {
                    (this.state.pet.skill1) ?
                <span>&nbsp; {this.state.pet.skill1}<br></br></span> :
                <span></span>
                }
                {
                    (this.state.pet.skill2) ?
                <span>&nbsp; {this.state.pet.skill2}<br></br></span> :
                <span></span>
                }
                {
                    (this.state.pet.skill3) ?
                <span>&nbsp; {this.state.pet.skill3}<br></br></span> :
                <span></span>
                }
            </p>
            <p>
                Likes: &nbsp; &nbsp; 
                <span>&nbsp; {this.state.pet.likes}</span> 
            </p>
            <button type="submit" onClick={this.likePet} disabled={this.state.isliked} id="likebutton">Like this pet</button> &nbsp;&nbsp;
            <button onClick={this.delete}>Adopt this pet</button>


      </fieldset>
      </div>
    )
  }
}

export default ViewPet
