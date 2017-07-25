import React from "React";
import { Icon } from 'antd';
import fetchJsonp from 'fetch-jsonp';
import Loading from "../common/Loading.js";
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
                    <img src={require("../img/music.jpg")} />
                    <div className="item-info">
                        <p>歌名</p>
                        <p>信息介绍</p>
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
  }

  render(){
    return (
        <div className="Music-lan">
            <div className="music-header">
                <img src={require("../img/xingebang.png")} />
            </div>
            <MusicList></MusicList>
            <MusicList></MusicList>
            <MusicList></MusicList>
            <MusicList></MusicList>
            <MusicList></MusicList>
        </div>
      );
  }
}

class MusicKind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MusicData: null,
      isLoading: true
      };
  }

  componentDidMount() {
    this.fetch_movie();
  }

  fetch_movie(){
    fetchJsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.billboard.billList&format=json&type=1&offset=0&size=5").then(response=> {
    return response.json();
  }).then(json=> {
    this.setState({
        MusicData: json.song_list,
        isLoading: false
      });
    console.log('parsed json', json)
  }).catch(err=>
    console.log('parsing failed', err)
  );
  }   
 
  render() {

    var isLoading = this.state.isLoading;
    console.log(isLoading);
    return (
      <div className="Music-div">
          <MusicLan />
          <MusicLan />
          <MusicLan />
          <MusicLan />
      </div>
      
    );
  }
}
export default MusicKind;