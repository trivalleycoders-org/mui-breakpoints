import React from 'react'
import { withStyles } from '@material-ui/core/styles'

// import {
//   Typography,
// } from '@material-ui/core'

/* User */
import TechIcons from '../TechIcons'
import Community from '../Community'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({
  pageMock: {
    margin: 'auto',
  },
})

const Home = ({ classes }) => {
  return (
    <div>
      {/* <TechIcons /> */}
      <Community />
    </div>
  )
}

export default withStyles(styles)(Home)
