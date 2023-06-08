
import React from "react";
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';

const ResultAnalyse = ({
  result,
  result_description,
  period,
  icon,
  numberof_event,
  iconColor
}) => {
  const resultStyle = {
    small: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: iconColor,
    },
  };

  return (
    <div className="count">
      <Typography variant="h1" fontFamily="Roboto">
      {result}
      </Typography>
      <p>{result_description}</p>
      <p style={resultStyle.small}>
        {icon}
        +{numberof_event}
        {period}
      </p>
    </div>
  );
};

export default ResultAnalyse;
