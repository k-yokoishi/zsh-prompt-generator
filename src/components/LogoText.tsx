import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const LogoText: React.FC<TypographyProps> = ({ children, ...restProps }) => (
  <Typography
    style={{
      fontFamily: "'Kaushan Script', cursive",
      fontWeight: 'bold',
      color: 'white',
    }}
    {...restProps}
  >
    {children}
  </Typography>
);

export default LogoText;
