import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../../state/profile-reducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import WithRouterProps from "./WithRouteProps";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.userId)
    this.props.getStatus(this.props.router.params.userId)
  }
  render() {
    return (
      <>
        <Profile {...this.props}/>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.usersPage.isFetching,
    user: state.profilePage.user,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  }
}

export default compose(
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withAuthRedirect,
  WithRouterProps
  )
  (ProfileContainer)