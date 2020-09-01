import React from "react";
import styled from "styled-components";

const StyledProfile = styled.div`
    width: 500px;
    max-width: 90%;

    margin: 2%;
    padding: 2%;

    border: 1px solid currentColor;
    border-radius: 2em;

    background: silver;
    color: #666666;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    img{
        max-width: 90%;
        border: 1px solid currentColor;
        border-radius: 2em;
    }

    div.profile{
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            font-size: 2.4rem;
        }

        .username{
            font-size: 2.0rem;
        }
    }

    div.swoosh{
        position: absolute;
        left: -40%; top: 0px;
        /*background-color: pink;*/
        width: 100%; height: 100%;

        transition: left 0.25s;

        background-image: linear-gradient(80deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8), rgba(255,255,255,0) 60%);
            /*80deg, rbga(255, 255, 255, 0), rbga(255, 255, 255, 100) 10%, rbga(255, 255, 255, 0) 20%);*/
    }

    :hover div.swoosh{
        left: 45%;
    }
`;

class Profile extends React.Component{
    render(){
        //console.log(this.props.user);
        return(
            <StyledProfile>
                <img src={this.props.user.avatar_url} alt={`${this.props.user.login}'s profile`} />
                <div className="profile">
                    <h3>{this.props.user.name ?? this.props.user.login}</h3>
                    <p className="username">{this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Profile:&nbsp;
                        <a href={`https://github.com/${this.props.user.login}`}>{`https://github.com/${this.props.user.login}`}</a>
                    </p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
                <div className="swoosh" />
            </StyledProfile>
        );
    }
}

export default Profile;