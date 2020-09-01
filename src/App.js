import React from 'react';

// state structure for the App:
// 1: fetch a profile and the followers list from that profile. Since I have no followers, we'll pretend.
// 2: when we have a profile from step 1, add it to a list in state
// 3: once we have a list of other usernames from step 1, fetch each of their profiles.
// 4: as each promise from step 3 resolves, take the resulting profile (if any) and add it to the state list
// As the state list is updated, render each new profile. (React will do this part automatically.)

const apiRoot = "https://api.github.com/users/";
const apiInitialCall = "samkester";
const fakeFollowers = ["MartaKode", "jidelson", "isaac-gorman", "AustinKelsay", "zakmayfield"]; // hey look it's my build week 1 team again

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profiles: [],
      followers: [],
    };
  }
  
  // lifecycle methods
  componentDidMount(){
    // query API for initial profile
    // then() sort the profile data into this.state.profiles and the follower list into this.state.followers
    // if the followers list is empty, improvise
  }

  componentDidUpdate(prevProps, prevState){
    // if the followers array has changed, iterate through its members
    // for each member that isn't already represented by a profile, query the API for their profile
    // then() append the profile to this.state.profiles
    // updates to this.state.profiles do not need handling here; they'll be handled in render()
  }

  // helper methods
  
  // event handlers

  render(){
    return(
      <div>I am a react app.</div>
    )
  }
}

export default App;
