import React from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MediaCard from 'ui/ui-elements/MediaCard'
import { green } from 'logger'

const logosTop = [
  {
    name: 'HTML 5',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/html.svg',
    height: 70,
    width: 70,
  },
  {
    name: 'CSS',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/css.svg',
    height: 70,
    width: 70,
  },
  {
    name: 'JavaScript',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/javascript.svg',
    height: 70,
    width: 70,
  },
  {
    name: 'React',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/react.svg',
    height: 70,
    width: 70,
  },
  {
    name: 'Node',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/nodejs.svg',
    height: 70,
    width: 70,
  },
]

const logosBottom = [
  {
    name: 'MongoDB',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/mongodb.svg',
    height: 51.13636362,
    width: 180,
  },
  {
    name: 'Express',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/express.svg',
    height: 51.13636362,
    width: 180,
  },
]

const TechIcons = ({ classes }) => {
  return (
    <React.Fragment>
    <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.gridTop}
            justify='center'
            spacing={40}
          >
            {
              logosTop.map(l => {
                green('l', l)
                return (
                  <Grid key={l.name} item>
                    <MediaCard
                      ratio={'100%'}
                      height={l.height}
                      width={l.width}
                      src={l.img}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.gridBottom}
            justify='center'
            spacing={24}
          >
            {logosBottom.map(l => (
              <Grid key={l.name} item>
                  <MediaCard
                    ratio={'28.4090909%'}
                    height={l.height}
                    width={l.width}
                    src={l.img}
                  />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </React.Fragment>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 50,
    // width: 100
  },
  gridBottom: {
    marginTop: 40,
  },
  gridTop: {

  },
})

export default withStyles(styles)(TechIcons)