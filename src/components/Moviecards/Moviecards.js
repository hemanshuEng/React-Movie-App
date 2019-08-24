import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Moviecard from "./../Moviecard/Moviecard";
import axios from "axios";

  
export default class Moviecards extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
       
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ac009e7b0224c7ac87f86e203c5439cd&language=en-US&page=1"
      )
      .then(res => {
        this.setState({
          data: res.data.results
        });
      });
  }
 
  render() {
    const Movielists = this.state.data;
   
    const Movielist = Movielists.map((movie)=>{
        return(
            <Grid item xs={2}>
                    <Moviecard
                    poster_path = {movie.poster_path}
                   title ={movie.title}
                    />
               </Grid>
            )  
         
    })
    return(
        <div  >
        <Grid container spacing={2}> 
          {Movielist}
        </Grid>
        </div>
    );
  }
}
