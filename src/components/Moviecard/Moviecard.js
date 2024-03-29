import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 350
  },
  media: {
    height: 400
  },
  cardTitle: {
    height: 50
  },
  cardImg: {
    width: "350px"
  }
});
const Moviecard = props => {
  const classes = useStyles();
  const img = `http://image.tmdb.org/t/p/w185${props.poster_path}`;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          image={img}
        ></CardMedia>
        <CardContent>
          <Typography className={classes.cardTitle} variant="h6" component="h6">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Moviecard;
