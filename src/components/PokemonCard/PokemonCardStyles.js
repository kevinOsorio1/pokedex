import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    background: (props) => (props.gradient ? props.gradient : ""),
    width: "300px",
    border: "solid 1px gray "
  },
}))
