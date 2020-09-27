import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Constants from '../Constants'


const SortArea = (props) => {
    const allMovies = [];
    
    useEffect(() => {
        //do not sort again if sorted before
        if( props.MovieSet_ReleaseDate.length === 0 ) {
            const total_page = Constants.TOTAL_PAGE;
            const preURL = Constants.PREURL;
            let url;    
            for(let i=1;i<=total_page;i++) {
                url = ''.concat(preURL, i);
                axios.get(url)
                .then(res => {
                    for( let j=0;j<res.data.results.length;j++ )
                        allMovies.push(res.data.results[j]);
                });
            }
            //now allMovies has 10,000 items, sort them in asc order and store them in redux store
            const myFunc = () =>
            {   
                // console.log(allMovies.length);
                // console.log("here");
        
                //sort 1
                allMovies.sort((a, b) => {
                    if( a.title > b.title )
                        return 1;
                    else if ( a.title < b.title )
                            return -1;
                    return 0;
                });
                let setData1 = [];
                let tempArr1 = [];
                let count1 = 0;
                for(let i=0;i<allMovies.length;i++) {     
                    tempArr1.push(allMovies[i]);
                    count1++;
                    if(count1 === 20) {
                        let setObj = {
                            pageNumber: (i+1)/20,
                            onePageMovies: tempArr1
                        };
                        setData1.push(setObj);
                        tempArr1 = [];
                        count1 = 0;
                    }
                }
                props.fillMovieSetTitle(setData1);
    
                //sort 2
                allMovies.sort((a, b) => {
                    if( a.vote_count > b.vote_count )
                        return 1;
                    else if ( a.vote_count < b.vote_count )
                            return -1;
                        else
                            return 0;
                });
                let setData2 = [];
                let tempArr2 = [];
                let count2 = 0;
                for(let i=0;i<allMovies.length;i++) {     
                    tempArr2.push(allMovies[i]);
                    count2++;
                    if(count2 === 20) {
                        let setObj = {
                            pageNumber: (i+1)/20,
                            onePageMovies: tempArr2
                        };
                        setData2.push(setObj);
                        tempArr2 = [];
                        count2 = 0;
                    }
                }
                props.fillMovieSetVoteCount(setData2);
    
                //sort 3
                allMovies.sort((a, b) => {
                    if( a.vote_average > b.vote_average )
                        return 1;
                    else if ( a.vote_average < b.vote_average )
                            return -1;
                        else
                            return 0;
                });
                let setData3 = [];
                let tempArr3 = [];
                let count3 = 0;
                for(let i=0;i<allMovies.length;i++) {     
                    tempArr3.push(allMovies[i]);
                    count3++;
                    if(count3 === 20) {
                        let setObj = {
                            pageNumber: (i+1)/20,
                            onePageMovies: tempArr3
                        };
                        setData3.push(setObj);
                        tempArr3 = [];
                        count3 = 0;
                    }
                }
                props.fillMovieSetAverageScore(setData3);
    
                //sort 4
                allMovies.sort((a, b) => {
                    if( a.release_date > b.release_date )
                        return 1;
                    else if ( a.release_date < b.release_date )
                            return -1;
                        else
                            return 0;
                });
                let setData4 = [];
                let tempArr4 = [];
                let count4 = 0;
                for(let i=0;i<allMovies.length;i++) {     
                    tempArr4.push(allMovies[i]);
                    count4++;
                    if(count4 === 20) {
                        let setObj = {
                            pageNumber: (i+1)/20,
                            onePageMovies: tempArr4
                        };
                        setData4.push(setObj);
                        tempArr4 = [];
                        count4 = 0;
                    }
                }
                props.fillMovieSetReleaseDate(setData4);
                console.log("done!");
    
            }
            setTimeout(myFunc, 5000);
        }
    }, []);

    //didumount
    useEffect(() => {
        return () => {
            props.changeShowType(0);
        };
    }, []);


    const handleSortT = () => {
        props.changeOrder();
        props.changeShowType(1);
        // console.log(props.ShowType);
    }

    const handleSortV = () => {
        props.changeOrder();
        props.changeShowType(2);
    }

    const handleSortA = () => {
        props.changeOrder();
        props.changeShowType(3);
    }

    const handleSortR = () => {
        props.changeOrder();
        props.changeShowType(4);
    }

    return (
        <div className="sortArea">
            <button onClick={handleSortT}>Sort by Title {props.SortOrder}</button>
            <button onClick={handleSortV}>Sort by Vote Count {props.SortOrder}</button>
            <button onClick={handleSortA}>Sort by Average Score {props.SortOrder}</button>
            <button onClick={handleSortR}>Sort by Release Date {props.SortOrder}</button>
        </div>
    );
}

export default SortArea;