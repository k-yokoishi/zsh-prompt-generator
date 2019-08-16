import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const LogoText: React.FC<TypographyProps> = ({ children, style = {}, ...restProps }) => (
  <Typography
    style={{
      fontFamily: "'Kaushan Script', cursive",
      fontWeight: 'bold',
      color: 'white',
      ...style,
    }}
    {...restProps}
  >
    {children}
  </Typography>
);

export default LogoText;
