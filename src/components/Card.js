import React from 'React'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Card = (props) => {
  const { containerStyle } = styles
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth : 0,
    shadowColor: '#000',
    shadowOffset : {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
