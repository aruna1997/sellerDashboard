import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    marginTop:theme.spacing.unit*35
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div style={{textAlign:"center"}}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);