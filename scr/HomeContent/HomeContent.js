import React from "React";
import CarouselDiv from "./CarouselDiv.js";
import HotMovie from "./HotMovie.js";

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
	
	

  render() {
    return (
    	<div>
			<CarouselDiv></CarouselDiv>
			<HotMovie></HotMovie>
    	</div>
      
    );
  }
}
export default HomeContent;