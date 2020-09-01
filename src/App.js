import React from 'react';
import axios from "axios";

// state structure for the App:
// 1: fetch a profile and the followers list from that profile. Since I have no followers, we'll pretend.
// 2: when we have a profile from step 1, add it to a list in state
// 3: when we have followers, add them to the list
// As the state list is updated, render each new profile. (React will do this part automatically.)

const apiRoot = "https://api.github.com/users/";
const apiInitialCall = "samkester";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profiles: [],
    };
  }
  
  // lifecycle methods
  componentDidMount(){
    // query API for initial profile
    // then() add the profile data into this.state.profiles and query for followers
    //   then() add the followers' profile data into this.state.profiles
    axios.get(apiRoot + apiInitialCall)
    .then(response => {
      //console.log(response)
      this.addProfileToState(response.data);
      axios.get(response.data.followers_url)
      .then(response => {
        response.data.forEach(profile => this.addProfileToState(profile));
        //console.log(response);
      }).catch(error => console.log(error));
    }) // end apiRoot then()
    .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.state.profiles);
  }

  // helper methods
  addProfileToState(profile){
    this.setState({profiles: [...this.state.profiles, profile]})
  }
  
  // event handlers

  render(){
    return(
      <div>
      {
        this.state.profiles ?
        this.state.profiles.map(item => <div key={item.id}>{item.login}</div>) :
        <p>Please wait, loading data.</p>
      }
      </div>
    )
  }
}

export default App;
