import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs: [],
      current: 0,
    };
  }
  componentDidMount(){
    this.setState({imgs: carouselData});
  }

  leftClick = () => {
    this.setState(({imgs, current}) => ({
      current: (imgs.length + current - 1) % imgs.length
    }));
  }

  rightClick = () => {
    this.setState(({imgs, current}) => ({
      current: (current + 1) % imgs.length
    }));
  }
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        <img src={this.state.imgs[this.state.current]}
             style={{display: 'block'}}
             alt="" />
      </div>
    );
  }
}
