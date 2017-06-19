import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class LastCompleted extends Component {
  render() {
    return(
      <div className="todoDisplay flex">
        <div className="textHolder flex">
          <span className="todoDisplayTextHeader">Last Completed Todo: </span>
          <br />
          <br />
          <span className="todoDisplayText">
            {this.props.lastCompleted}
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { lastCompleted: state.lastCompleted }
}

export default connect(mapStateToProps)(LastCompleted);
