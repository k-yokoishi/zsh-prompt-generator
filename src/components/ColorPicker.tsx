import * as React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Color } from '../types';
import { getColor } from './colors';

interface Props {
  value: Color | number;
  onChange: (color: Color | number) => void;
}

const useStyles = makeStyles({
  previewOuter: {
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    width: '116px',
    cursor: 'pointer',
    border: 'solid 1px',
    borderRadius: '4px',
    borderColor: 'white',
  },
  outlined: {
    borderColor: 'lightgray',
  },
  previewInner: {
    width: '24px',
    height: '16px',
    border: 'solid 1px',
    borderColor: 'lightgray',
    borderRadius: '4px',
    margin: '4px',
  },
  colorPopper: {
    padding: '8px',
    width: '240px',
  },
  colorBox: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    border: 'solid 1px',
    borderColor: 'lightgray',
    margin: '1px',
    display: 'inline-block',
    cursor: 'pointer',
  },
  color: {
    margin: '4px',
  },
});

export default function ColorPicker(props: Props) {
  const { value, onChange } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [hover, setHover] = React.useState<boolean>(false);
  const classes = useStyles();

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const renderColorBox = (color: Color | number) => (
    <Typography
      key={color}
      component="div"
      className={classes.colorBox}
      style={{ backgroundColor: getColor(color) }}
      onClick={() => onChange(color)}
    />
  );

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Typography
      component="div"
      className={clsx([classes.previewOuter, hover && classes.outlined])}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography
        component="div"
        aria-describedby={id}
        className={classes.previewInner}
        style={{ backgroundColor: getColor(value) }}
      />
      <Box className={classes.color}>{value}</Box>
      <Popper id={id} anchorEl={anchorEl} open={Boolean(anchorEl)} placement={'left'}>
        <Paper className={classes.colorPopper}>
          <Typography>Basic 8 Colors</Typography>
          {['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'].map(color =>
            renderColorBox(color as Color)
          )}
          <Divider variant="middle" />
          <Typography>xterm 256 Colors</Typography>
          {[...Array(256)].map((_, i) => renderColorBox(i))}
        </Paper>
      </Popper>
    </Typography>
  );
}
