import { makeStyles } from "@mui/styles";

export default makeStyles({
  cartComps: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  product: {
    "@media (max-width: 820px)": {
      width: "100%",
      borderRadius: "5px",
    },
  },
  cartItem: {
    "@media (max-width: 820px)": {
      width: "100%",
      borderRadius: "5px",
    },
  },
});
