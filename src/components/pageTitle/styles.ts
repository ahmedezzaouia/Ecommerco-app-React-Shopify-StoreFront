import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  title: {
    fontFamily: "italic",
    textAlign: "center",
    fontSize: "3rem",
    "@media (max-width: 820px)": {
      fontSize: "2.6rem",
    },
  },
  subTitle: {
    fontFamily: "italic",
    textAlign: "center",
    "@media (max-width: 820px)": {
      fontSize: "1.4rem",
    },
  },
  root: {
    "@media (max-width: 820px)": {
      padding: "30px",
      marginLeft: "-20px",
    },
  },
}));
