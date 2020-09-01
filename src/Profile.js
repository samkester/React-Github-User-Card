import React from "react";

class Profile extends React.Component{
    render(){
        //console.log(this.props.user);
        return(
            <div className="card">
                <img src={this.props.user.avatar_url} alt={`${this.props.user.login}'s profile`} />
                <div className="card-info">
                <h3 className="name">{this.props.user.name ?? this.props.user.login}</h3>
                <p className="username">{this.props.user.login}</p>
                <p>Location: {this.props.user.location}</p>
                <p>Profile:&nbsp;
                    <a href={`https://github.com/${this.props.user.login}`}>{`https://github.com/${this.props.user.login}`}</a>
                </p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>Bio: {this.props.user.bio}</p>
                </div>
            </div>
        );
    }
}

export default Profile;