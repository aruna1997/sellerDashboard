import React,{ Component } from "react";
import Proptypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


const styles=theme=>({
      layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
          marginTop: theme.spacing.unit * 6,
          marginBottom: theme.spacing.unit * 6,
          padding: theme.spacing.unit * 3,
        },
      },
})
let stylesImg = {
    exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    opacity: '0'
    }
    }

class ArticleAdd extends Component
{
    render()
    {
        const {classes}=this.props;
        return(<React.Fragment>
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                    New Article
                    </Typography>
                    <Grid container spacing={20}>
                        <Grid item xs={12} md={6}>
                        <TextField style={{marginBottom:"24px"}} required id="Article no." label="Article No" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField style={{marginBottom:"24px"}} required variant="outlined" multiline={true} rows={6} label="Article Details" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <Button label="Choose an Image" primary={true}>
                            <input id="imageButton" style={styles.exampleImageInput} type="file"></input>
                        </Button>
                        </Grid>
                        <Grid item xs={12}>
                        <Button variant="contained" value="submit" onClick={()=>{console.log('one')
                        }}>Submit</Button>
                        </Grid>
                    </Grid>
                </Paper>
              </main>
            </React.Fragment>
        );
    }

}
ArticleAdd.Proptypes={
    classes:Proptypes.object.isRequired,
}
export default withStyles(styles)(ArticleAdd);