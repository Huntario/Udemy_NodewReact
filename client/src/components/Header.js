import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
  renderContent(){
    console.log('this.props.auth');
    console.log(this.props.auth);
    switch(this.props.auth){
      case null: 
        return "still deciding";
      case false:
        return "Im logged out";
      default: 
        return "Im logged in";
    }
  }
  render() {
  	return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo"> 
            Emaily
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
  	);
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);