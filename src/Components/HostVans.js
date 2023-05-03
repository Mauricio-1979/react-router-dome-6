import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function HostVans() {

  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
    .then(res => res.json())
    .then( data => setVans(data.vans))
  }, []);

  const handleVans =  vans.map(item => (
    <Link to={`/host/vans/${item.id}`} key={item.id}
      className='host-van-link-wrapper'
    >
      <div className='host-van-single' key={item.id}>
        <img src={item.imageUrl} alt={`photo of ${item.name}`} />
        <div className='host-van-info'>
          <h3>{item.name}</h3>
          <p>${item.price}/day</p>
        </div>
      </div>
    </Link>

  ))


  return (
    <section>
        <h1 className='host-vans-title'> Your listed vans</h1>
        <div className='host-vans-title'>
          {
            vans.length > 0 ? (
              <section>
                {handleVans}
              </section>
            ) :
            (
              <h2>Loading...</h2>
            )
          }
        </div>
    </section>
  )
}

export default HostVans;