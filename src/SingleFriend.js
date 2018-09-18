import React from "react";
import Users from "./users";

class SingleFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // fill this in
    let myId;
    if (this.props.userId) {
      myId = this.props.userId;
    } else {
      myId = this.props.match.params.userId;
    }
    const foundUser = Users.find(user => user.id === Number(myId));
    if (!foundUser) return;
    this.setState({ user: foundUser });
  }

  render() {
    const { first_name, last_name, email, gender } = this.state.user;
    return (
      <div className="friend-wrapper">
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
        <p>{gender}</p>
      </div>
    );
  }
}

export default SingleFriend;
