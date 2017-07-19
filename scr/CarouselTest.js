import React from "React";
import { Carousel } from 'antd';
import "./CarouselTest.css"

class CarouselTest extends React.Component {
	render() {
		return (
			<Carousel autoplay>
			    <div><h3>1</h3></div>
			    <div><h3>2</h3></div>
			    <div><h3>3</h3></div>
			    <div><h3>4</h3></div>
			</Carousel>
		);
	}
}

export default  CarouselTest;