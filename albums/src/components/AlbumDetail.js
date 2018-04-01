import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetail = props => {
  const { album } = props;
  const redirect = () => {
    Linking.openURL(album.url);
  }
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          source={{ uri: album.image }}
          style={styles.imageStyle}
        />
      </CardSection>
      <CardSection>
        <Button onPress={redirect} btnText={'Buy album'}/>
      </CardSection>
    </Card>
  )
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
}

export default AlbumDetail
