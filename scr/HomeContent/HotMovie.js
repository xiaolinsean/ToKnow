import React from "React";
import fetchJsonp from 'fetch-jsonp';
require('es6-promise').polyfill();




class HotMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MoviesData: null,
      isLoading: true
      };

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
      
 

  render() {
    console.log(this.state.MoviesData);
    return (
      <div onClick={this.fetch_movie.bind(this)}>hot movies</div>
    );
  }
}
export default HotMovie;