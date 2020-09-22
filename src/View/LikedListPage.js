import React, { Fragment } from 'react';
import axios from 'axios';
import ShowLikedMovie from './ShowLikedMovie';
import '../Styles/LikedListPage.css'

const pageBaseURL = 'https://api.themoviedb.org/3/';
const action = 'movie/popular?api_key=';
const JacksonApiKey = '9d3badb0c8d83a0bce6bf3cf96e3cc60';
const lang = '&language=en-US';
const page = '&page=1';

const url = ''.concat(pageBaseURL,action,JacksonApiKey,lang,page);;

class LikedListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        axios.get(url)
        .then( res => {
            const response = res.data;
            this.setState({
                data: response.results.slice(10)
            });
            console.log(this.state.data);
        });
    }    
    

    
    render() {
        const likedMovies = this.state.data.slice().map(movie => 
                                    <ShowLikedMovie key={movie.id} movieData={movie}/>
                                );
        return (
            <Fragment>
                <h1>Movie List of Liked</h1>
                <div className="ShowLikedMovie">
                    {likedMovies}
                </div>
            </Fragment>
        );       
    }
}

export default LikedListPage;