import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, fetchPopularTv, netflixOriginalsSelector, popularTvSelector } from '../features/tv/tvSlice';
import Header from "..//components/Header";
import Row from '../components/Row';
import { platform } from '../helper/request';

function Homescreen(props) {
    const dispatch = useDispatch();
    const netflixOriginals = useSelector(netflixOriginalsSelector);
    // const {nfresults} = netflixOriginals.data.results; - either destructure the property or assign it to variable like the following.
    const nfresults = netflixOriginals.data?.results;
    const randomIndex = Math.floor(Math.random() * nfresults?.length);
   
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, [dispatch]);
    return (
        <>
        {
            nfresults ? 
             <Header item={nfresults[randomIndex]}/>: "no data"
        }
        <div className='container-fluid'>
            <Row title="Popular Shows" action={fetchPopularTv}
            selector={popularTvSelector} platform={platform.tv}/>
         
         <Row title="Netflix Originals" action={fetchNetflixOriginals}
            selector={netflixOriginalsSelector} platform={platform.tv}/>


        </div>
        </>
    );
}

export default Homescreen;