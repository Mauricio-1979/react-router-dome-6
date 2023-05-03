import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {

  const { currentVan } = useOutletContext()

  return (
    <img src={currentVan[0].imageUrl} className="host-van-detail-image" alt='van' />
  )
}

export default HostVanPhotos