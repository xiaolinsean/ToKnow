import React from "React";
import CarouselDiv from "./CarouselDiv.js";
import HotMovie from "./HotMovie.js";
import HotMusic from "./HotMusic.js";
import MusicKind from "./MusicKind.js";

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
      <HotMusic></HotMusic>
      <MusicKind></MusicKind>
    	</div>
      
    );
  }
}
export default HomeContent;