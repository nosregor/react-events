import React, { Component } from 'react';

class SocialCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nbOfLikes: 0,
      isMouseIn: false
    }
  }

  addLike = () => {
    this.setState({
      nbOfLikes: this.state.nbOfLikes + 1
    })
  }

  handleMouseEnter = () => {
    this.setState({
      isMouseIn: true
    })
  }

  handleMouseMouseLeave = () => {
    this.setState({
      isMouseIn: false
    })
  }


  render() {
    return (
      <div className="SocialCard"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseMouseLeave}
        style={{ backgroundColor: this.state.isMouseIn ? "#DDDDFF" : "#EEEEFF" }}
      >

        <img src={this.props.image} alt={this.props.name} />
        <h2>{this.props.name}</h2>
        <button onClick={this.addLike} > {this.state.nbOfLikes} like{this.state.nbOfLikes !== 1 && 's'} </button>
      </div >
    );
  }
}

export default SocialCard;

