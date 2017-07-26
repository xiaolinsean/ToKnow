import React from "React";
import { Icon } from 'antd';
import fetchJsonp from 'fetch-jsonp';
import Loading from "../common/Loading.js";
import { fetch_info } from "../common/fetch.js";
require('es6-promise').polyfill();
import "./MusicKind.css";

class MusicList extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (  
            <div className="music-list">
                <div className="list-item">
                    <img src={this.props.Music.pic_small} />
                    <div className="item-info">
                        <p className="music-title">{this.props.Music.title}</p>
                        <p className="music-aythor">{this.props.Music.author}</p>
                    </div>
                    <Icon type="play-circle-o" className="item-play" />
                </div>
            </div>
      );
  }
}
class MusicLan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      MusicData: [],
      isLoading: true
      };
  }

  componentDidMount() {
    fetch_info({
      start: this.props.start,
      size: this.props.size,
      type: this.props.URLtype
    }).then(json=> {
      this.setState({
          MusicData: json.song_list,
          isLoading: false
        });
      console.log(json);
    }).catch(err=> {
      console.log('parsing failed', err);
    })
  }

  render(){

    var imgURL = this.props.imgURL;
    var isLoading = this.state.isLoading;

    var Items =[];
    this.state.MusicData.forEach((Music) => {
      Items.push(<MusicList Music={Music} key={Music.song_id}/>);
    });

    return (
        <div className="Music-lan">
            <div className="music-header">
                <img src={imgURL} />
            </div>
            {Items}
        </div>
      );
  }
}

class MusicKind extends React.Component {
  constructor(props) {
    super(props);
  }


  // fetch_info(){
  //   fetchJsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.billboard.billList&format=json&type=1&offset=0&size=5").then(response=> {
  //   return response.json();
  // }).then(json=> {
  //   this.setState({
  //       MusicData: json.song_list,
  //       isLoading: false
  //     });
  //   console.log('parsed json', json)
  // }).catch(err=>
  //   console.log('parsing failed', err)
  // );
  // }   
 
  render() {

    var img_arr = [require('../img/xingebang.png'),require('../img/regebang.png'),require('../img/KTV.png'),require('../img/billboard.png'),];
    return (
      <div className="Music-div">
          <MusicLan URLtype="1" size="5" start="0" imgURL={img_arr[0]} />
          <MusicLan URLtype="2" size="5" start="0" imgURL={img_arr[1]} />
          <MusicLan URLtype="6" size="5" start="0" imgURL={img_arr[2]} />
          <MusicLan URLtype="8" size="5" start="0" imgURL={img_arr[3]} />
      </div>
      
    );
  }
}
export default MusicKind;