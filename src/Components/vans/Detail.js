import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {

    const [van, setVan] = useState([]);
    const params = useParams();
    
    console.log(params);



    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])

    console.log(van)

  return (
    <div className='van-detail-container'>
        { van ?
            (<div className='van-detail'>
                <img src={van.imageUrl} alt='phto van' />
                <i className={`van-type ${van.type} selected`} >{van.type}</i>
                <h2>{van.name}</h2>
                <p>{van.description}</p>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>)
            : <p>Loading...</p>
    }

    </div>
  )
}

export default Detail;