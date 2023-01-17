import React from "react";
import profile from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  editModeOn = () => {
    this.setState({
      editMode: true
    })
  }
  editModeOff = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className={profile.status}>
        {this.state.editMode 
          ? <input type="text" onChange={this.onStatusChange} value={this.state.status} onBlur={this.editModeOff} /> 
          : <span onDoubleClick={this.editModeOn} >{this.props.status}</span>
        }
      </div>
    )
  }
}

export default ProfileStatus