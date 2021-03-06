import React from "react";
import { Typography, Container } from "@mui/material";
import useStyle from "./styles";

interface titleProps {
  title: string;
  subTitle: string;
}
const Page_title = ({ title, subTitle }: titleProps) => {
  const clasess = useStyle();

  return (
    <Container className={clasess.root} disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 5 }}>
      <Typography
        className={clasess.title}
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography className={clasess.subTitle} variant="h5" align="center" color="text.secondary" component="p">
          {subTitle}
        </Typography>
      )}
    </Container>
  );
};

export default Page_title;
