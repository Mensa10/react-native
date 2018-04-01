import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends PureComponent {
	state = {
		albums: []
	}
	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(data => this.setState({ albums: data.data }));
	};

	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} /> );
	}

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
