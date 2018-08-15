import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Breakpoints from '../Breakpoint'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const iCommunity = 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/community.jpg'

const Community = ({ classes }) => {
  return (
    <React.Fragment>
      <Breakpoints/>
      <Typography variant='display1' align='center'>
        A Community
      </Typography>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <ResponsiveImage src={iCommunity} alt='people talking at coffee shop' />
        </div>
        <div className={classes.contentRight}>
          <Typography variant='headline' align='justify' className={classes.message}>
            TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.
          </Typography>

        </div>
      </div>
    </React.Fragment>
  )
}

const styles = theme => ({
  message: {
    // backgroundColor: 'orange',
    wordSpacing: '-2px',
  },
  contentLeft: {
    flexBasis: '50%',
  },
  contentRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '50%',
    margin: '0 4% 0 4%'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexFlow: 'column',

    },
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row',
      justifyContent: 'space-between',
      margin: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('xl')]: {
      margin: theme.spacing.unit * 2,
    },
  }
})

export default withStyles(styles)(Community)