import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ColorPicker from '../components/ColorPicker';
import { Color } from '../types';

interface Props {
  displayStr: string;
  bold: boolean;
  fgColor: Color | number | null;
  bgColor: Color | number | null;
  onBoldChange: (bold: boolean) => void;
  onFgColorChange: (color: Color | number) => void;
  onBgColorChange: (color: Color | number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({ formField: { margin: theme.spacing(1) } })
);

const PromptItemEdition: React.FC<Props> = ({
  displayStr,
  bold,
  fgColor,
  bgColor,
  onBoldChange,
  onFgColorChange,
  onBgColorChange,
}) => {
  const classes = useStyles();
  return (
    <FormGroup>
      <Typography>{displayStr}</Typography>
      <FormControlLabel
        label="Bold"
        control={
          <Switch
            color="primary"
            checked={bold}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onBoldChange(e.target.checked)}
          />
        }
      />
      <FormLabel className={classes.formField}>Foreground color</FormLabel>
      <ColorPicker value={fgColor} defaultColor="white" onChange={onFgColorChange} />
      <FormLabel className={classes.formField}>Background color</FormLabel>
      <ColorPicker value={bgColor} defaultColor="#3E3A39" onChange={onBgColorChange} />
    </FormGroup>
  );
};

export default PromptItemEdition;
