import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ColorPicker from '../components/ColorPicker';
import { Color } from '../types';

interface Props {
  bold: boolean;
  fgColor: Color | number;
  bgColor: Color | number;
  onBoldChange: (bold: boolean) => void;
  onFgColorChange: (color: Color | number) => void;
  onBgColorChange: (color: Color | number) => void;
}

export default function PromptItemEdition(props: Props) {
  const { bold, fgColor, bgColor, onBoldChange, onFgColorChange, onBgColorChange } = props;
  return (
    <FormGroup>
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
      <FormLabel>Foreground color</FormLabel>
      <ColorPicker value={fgColor} onChange={onFgColorChange} />
      <FormLabel>Background color</FormLabel>
      <ColorPicker value={bgColor} onChange={onBgColorChange} />
    </FormGroup>
  );
}
