import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = {
  card: {
    // maxWidth: 345,
    width: 70,
    height: 70,
    padding: '3%',
    backgroundColor: 'transparent',
    // margin: '10px 0 10px 0',

  },
  media: {
    height: 0,
    paddingTop: '100.0%', // 16:9
    // paddingTop: '0%',
  },
}

const placeholderImage = 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/image-placeholder.png'

const MediaCard = ({ classes, src, height, width, ratio }) => {
  const cardStyle = {
    width: width,
    height: height,
    padding: '3%',
    backgroundColor: 'transparent',
  }
  const mediaStyle = {
    height: 0,
    paddingTop: ratio, // 16:9
  }
  green('src', src)
  return (
    <Card style={cardStyle}>
      <CardMedia
          // className={classes.media}
          style={mediaStyle}
          image={src ? src : placeholderImage}
          // image={src}
        />
    </Card>
  )
}

export default withStyles(styles)(MediaCard)