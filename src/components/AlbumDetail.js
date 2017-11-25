import React from 'React'
import { Text, View, Image, Linking } from 'react-native'
import PropTypes from 'prop-types'

import Card from './Card.js'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  const { thumbnailStyle, headerContentStyles, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri : thumbnail_image }}
          />
        </View>
        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url)
          }}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyles : {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle : {
    fontSize: 18
  },
  thumbnailStyle : {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle : {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle : {
    height: 300,
    flex: 1,
    width: null
  }
}

AlbumDetail.propTypes = {
  album: PropTypes.object
}

export default AlbumDetail