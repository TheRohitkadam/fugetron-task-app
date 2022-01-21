import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    borderRadius: 20,
    lineHeight: 0.8,
    fontWeight: 400,
    width: 90,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function StyledButton({ bgcolor, children, onClick, type }) {
  const classes = useStyles();

  return (
    <BootstrapButton
      variant="contained"
      color="primary"
      disableRipple
      className={classes.margin}
      style={{backgroundColor: bgcolor}}
      onClick={onClick}
      type={type}
    >
      {children}
    </BootstrapButton>
  );
}
