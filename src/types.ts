export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

export interface IPromptPart {
  label: string;
  fgColor: Color | number;
  bgColor: Color | number;
  bold?: boolean;
}
