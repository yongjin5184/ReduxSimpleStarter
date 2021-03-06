import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyChJNiKZU4R3EF3en_8GjuZ49UNW4z0Apc";



class App extends Component {
  constructor(props){
     super(props);

     this.state = { videos : []};
     YTSearch({key : API_KEY, term : '자꾸tv'}, (videos) => {
       this.setState({videos});
       //this.setState({ videos : videos });
     });
  }

  render() {

     return (
         <div>
           <SearchBar />
           <VideoDetail video={this.state.videos[2]}/>
           <VideoList videos={this.state.videos} />
         </div>
     );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


