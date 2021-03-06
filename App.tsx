import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App extends Component {
  onClick = () => {
    this.props.dispatchLoIn({
      id: "zerocho",
      password: "비밀번호",
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut();
  };

  render() {
    const { user } = this.props;

    return (
      <div>
        {user.isLoggingIn ? (
          <div>로그인 중 </div>
        ) : user.data ? (
          <div>{user.data.Nickname} </div>
        ) : (
          "로그인해주세요."
        )}
        {!user.data ? (
          <button onClick={this.onClick}>로그인 </button>
        ) : (
          <button onClick={this.onLogout}>로그아웃 </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (data: { id; password }) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(APP);
