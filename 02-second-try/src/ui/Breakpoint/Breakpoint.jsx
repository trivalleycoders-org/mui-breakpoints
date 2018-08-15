import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'


// import { green } from 'logger'

const Xs = ({ classes }) => (<Typography variant='headline' className={classes.showXs}>xs</Typography>)
const Sm = ({ classes }) => (<Typography variant='headline' className={classes.showSm}>sm</Typography>)
const Md = ({ classes }) => (<Typography variant='headline' className={classes.showMd}>md</Typography>)
const Lg = ({ classes }) => (<Typography variant='headline' className={classes.showLg}>lg</Typography>)
const Xl = ({ classes }) => (<Typography variant='headline' className={classes.showXl}>xl</Typography>)

const Breakpoint = ({ classes }) => {
  // green('classes', classes)
  return (
    <div className={classes.wrapper}>
      <Xs classes={classes}/>
      <Sm classes={classes}/>
      <Md classes={classes}/>
      <Lg classes={classes}/>
      <Xl classes={classes}/>
    </div>
  )

}

const styles = theme => ({
  wrapper: {
    marginBottom: theme.spacing.unit * 3
  },
  showXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      backgroundColor: red[500],
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  showSm: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      backgroundColor: green[500],
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  showMd: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      backgroundColor: purple[500],
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  showLg: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      backgroundColor: yellow[500],
      textAlign: 'center',
      color: 'black',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  showXl: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'block',
      backgroundColor: grey[500],
      textAlign: 'center',
    },
    // [theme.breakpoints.up('xl')]: {
    //   display: 'none',
    // },
  },
})

export default withStyles(styles)(Breakpoint)