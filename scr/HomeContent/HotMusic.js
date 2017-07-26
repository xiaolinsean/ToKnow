import React from "React";
import { Row, Col, Icon } from 'antd';
import fetchJsonp from 'fetch-jsonp';
import Loading from "../common/Loading.js";
require('es6-promise').polyfill();
import "./HotMusic.css";

class MusicItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    
    var picPath = this.props.Music.pic_big;
    var bg = {
        background: `url(${picPath})`,
        backgroundSize: 'cover',
    };
    return (
          <div className="music-item">
            <div className="gutter-box">
              <div className="music-pic" style={ bg } >
                  <Icon type="play-circle-o" className="play-icon" />
              </div>
              <div>
                <div className="music-title">{this.props.Music.title}</div><div className="author">{this.props.Music.author}</div>
              </div>
            </div>
          </div>
    );
  }
}

class MusicCol extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    var Items =[];
    this.props.MusicData.forEach((Music) => {
      Items.push(<MusicItem Music={Music} key={Music.song_id}/>);
    });

    return (
      <div className="gutter-example">
          {Items}
      </div>
    );
  }
}



class HotMusic extends React.Component {
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
    // console.log("path:" + movie_path);
    fetchJsonp("https://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.billboard.billList&format=json&type=2&offset=0&size=8").then(response=> {
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
    return (
      <div style={{margin:"20px 0"}}>
          <p className="title">音乐风云</p>
          { isLoading ? <Loading /> : <MusicCol MusicData={this.state.MusicData} />}
      </div>
      
    );
  }
}
export default HotMusic;
