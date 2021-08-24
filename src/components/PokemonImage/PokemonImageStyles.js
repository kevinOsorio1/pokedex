import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: 100,
    height: 100,
  },
  bottom: {
    position: "absolute",
    marginLeft: -30,
    height: "90px",
    width: "90px,",
    zIndex: 0,
  },
  top: {
    position: "absolute",
    height: "80px",
    width: "80px",
    marginBottom: "50px",
    zIndex: 1,
  },
}))
