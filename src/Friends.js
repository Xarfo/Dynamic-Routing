import React from "react";
import { Link } from "react-router-dom";
import SingleFriend from "./SingleFriend";

class Friends extends React.Component {
  onHomeClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <ul>
        <button onClick={this.onHomeClick}>Go Home</button>
        {this.props.users.map(user => (
          <Link to={`friends/${user.id}`}>
            <SingleFriend key={user.id} userId={user.id} />
          </Link>
        ))}
      </ul>
    );
  }
}

export default Friends;

//
