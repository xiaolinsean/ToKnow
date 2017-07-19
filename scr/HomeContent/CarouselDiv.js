import React from "React";
import { Carousel } from 'antd';
import "./CarouselDiv.css";

class CarouselDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Carousel autoplay>
        <div className="Carousel-item"><img src={require("../img/movie_carousel_1.jpg")} alt=""/></div>
        <div className="Carousel-item"><img src={require("../img/movie_carousel_2.jpg")} alt=""/></div>
        <div className="Carousel-item"><img src={require("../img/movie_carousel_3.jpg")} alt=""/></div>
        <div className="Carousel-item"><img src={require("../img/movie_carousel_4.jpg")} alt=""/></div>
      </Carousel>
    );
  }
}
export default CarouselDiv;