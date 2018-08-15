import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import grey from '@material-ui/core/colors/grey'
import yellow from '@material-ui/core/colors/yellow'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: green[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: purple[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: grey[500],
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: yellow[500],
    },
  },
  wrapper: {
    display: 'flex',
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

function MediaQuery(props) {
  const { classes } = props

  return (
    <div className={classes.wrapper}>
      <Typography variant="subheading" className={classes.root}>{'down(xs): red'}</Typography>
      <Typography variant="subheading" className={classes.root}>{'up(sm): green'}<span className={classes.test}>test stuff</span></Typography>
      <Typography variant="subheading" className={classes.root}>{'up(md): purple'}</Typography>
      <Typography variant="subheading" className={classes.root}>{'up(lg): grey'}</Typography>
      <Typography variant="subheading" className={classes.root}>{'up(xl): yellow'}</Typography>
    </div>
  )
}

MediaQuery.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaQuery)
