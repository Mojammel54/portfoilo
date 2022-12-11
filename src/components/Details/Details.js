import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const Details = () => {
    const { id } = useParams()
    console.log(id)
    const [details, setDetails] = useState([])
    useEffect(() => {


        fetch(`https://server-mojammel54.vercel.app/details?category=${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))




    }, [id])


    console.log(details)

    return (
        <div>
            {

                details?.map(detail => <ShowDetails key={details._id} detail={detail} id={id}></ShowDetails>)


            }
        </div>
    );
};

export default Details;