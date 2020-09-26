import React from 'react';
import Constants from '../Constants';
import axios from 'axios';

class Pagination extends React.Component {
    prevPageHandeler = () => {
        const Page = this.props.Page;
        if(Page === 1)
            alert("this is first page!");
        else 
            this.props.changePage(Page-1);
    }
        
    nextPageHandeler = () => {
        let Page = this.props.Page;
        if(Page === 500)
            alert("this is the last page!");
        else {
            Page++;
            this.props.changePage(Page);
            //if it is a new page, send request to server
            if( !this.props.check(Page) ) {
                const url = ''.concat(Constants.PREURL, Page);
                axios.get(url)
                .then( res => {
                    // const resPage = res.data.page;
                    const resResults = res.data.results;
                    this.props.addOnePageMovies(Page, resResults);
                    console.log(Page);               //number
                    console.log(resResults);            //array
                });
            }
        }
            
    }

    render() {
        return (
            <div className="paginationArea">
                <button onClick={this.prevPageHandeler}>Prev</button>
                <p className="pageText">{this.props.Page} / 500</p>
                <button onClick={this.nextPageHandeler}>Next</button>
            </div>
        );
}
}

export default Pagination;