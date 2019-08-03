import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeICon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonIcon: {
      marginRight: theme.spacing(1),
    },
    link: {
      color: 'white',
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.link}>
        <Grid container direction="row" justify="space-between">
          <Typography variant="h6">Zsh Prompt Generator</Typography>
          <Link
            className={classes.link}
            component={Button}
            href="https://github.com/k-yokoishi/zsh-prompt-generator"
          >
            <CodeICon className={classes.buttonIcon} />
            Source on GitHub
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
