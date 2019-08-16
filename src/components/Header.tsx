import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeICon from '@material-ui/icons/Code';
import clsx from 'clsx';
import LogoText from '../components/LogoText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: '#72B8F8',
    },
    headerLogo: {
      marginRight: theme.spacing(2),
    },
    inline: {
      display: 'inline',
    },
    buttonIcon: {
      marginRight: theme.spacing(1),
    },
    link: {
      color: 'white',
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.link}>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <LogoText variant="h4" className={clsx([classes.headerLogo, classes.inline])}>
              Zsh Prompt Generator
            </LogoText>
            <Typography className={classes.inline}>
              PROMPT &amp; RPROMPT Generator for Z Shell
            </Typography>
          </Grid>
          <Grid item>
            <Link
              className={classes.link}
              component={Button}
              href="https://github.com/k-yokoishi/zsh-prompt-generator"
            >
              <CodeICon className={classes.buttonIcon} />
              Source on GitHub
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
