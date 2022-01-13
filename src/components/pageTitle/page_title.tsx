import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface titleProps  {
  title: string,
};
const Page_title = ({ title }:titleProps) => {
  const useStyle = makeStyles({
    title: {
      fontFamily: "italic",
    },
  });
  const clasess = useStyle();

  return (
    <Box sx={{ padding: "30px 0px" }}>
      <Typography className={clasess.title} variant="h2">
        {title}
      </Typography>
    </Box>
  );
};

export default Page_title;
