import React from "React";
import { Spin, Row, Col } from 'antd';
import fetchJsonp from 'fetch-jsonp';
require('es6-promise').polyfill();
import "./HotMovie.css";

class MoviesItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    //this.props.Movies.images.large
    // console.log("MoviesItem");
    // console.log(this.props.Movies);
    var picPath = this.props.Movies.images.large;
    // console.log(picPath);
    var bg = {
        background: `url(${picPath})`,
        backgroundSize: 'cover',
    };
    return (
          <div className="movie-item">
            <div className="gutter-box">
              <div className="movie-pic" style={ bg } >
                  
              </div>
              <div className="movie-info">
                <span className="name">{this.props.Movies.title}</span><span className="score">{this.props.Movies.rating.average}分</span>
              </div>
            </div>
          </div>
    );
  }
}

class MoviesCol extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("MoviesCol");
    // console.log(this.props.MoviesData);
    var Items =[];
    this.props.MoviesData.forEach((Movies) => {
      Items.push(<MoviesItem Movies={Movies} key={Movies.id}/>);
    });

    return (
      <div className="gutter-example">
          {Items}
      </div>
    );
  }
}


class Loading extends React.Component{
  render() {
    return (
      <div>
        <Spin size="large" wrapperClassName="spin" style={{margin:"0 auto",display: "block"}} />
      </div>
    );
  }
}

class HotMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MoviesData: null,
      isLoading: true
      };
  }

  componentDidMount() {
    this.fetch_movie();
  }


  fetch_movie(){
    // console.log("path:" + movie_path);
    fetchJsonp("https://api.douban.com/v2/movie/in_theaters?count=5").then(response=> {
    return response.json();
  }).then(json=> {
    this.setState({
        MoviesData: json.subjects,
        isLoading: false
      });
    console.log('parsed json', json)
  }).catch(err=>
    console.log('parsing failed', err)
  );
  }   
 
//<div onClick={this.fetch_movie.bind(this)}>hot movies</div>
  render() {
    console.log("MoviesData:" );
    console.log(this.state.MoviesData);

    var isLoading = this.state.isLoading;
    // console.log(isLoading);
    return (
      <div style={{margin:"20px 0"}}>
          <span className="title">热映电影</span>
          { isLoading ? <Loading /> : <MoviesCol MoviesData={this.state.MoviesData} />}
      </div>
      
    );
  }
}
export default HotMovie;