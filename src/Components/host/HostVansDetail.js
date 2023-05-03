import React, {useState, useEffect} from 'react';
import { NavLink, Link, Outlet, useParams } from 'react-router-dom';


function HostVansDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const {id} = useParams();
  
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => setCurrentVan(data.vans) )

    console.log(currentVan)
  }, [])

  if (!currentVan) {
    return <h1>Loading...</h1>
}

  return (
    <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan[0].imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVan[0].type}`}
                    >
                        {currentVan[0].type}
                    </i>
                    <h3>{currentVan[0].name}</h3>
                    <h4>${currentVan[0].price}/day</h4>
                </div>
            </div>

            <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>
                <NavLink
                    to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="photos"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
            </nav>
            <Outlet context={{ currentVan }} />
        </div>
    </section>
  )
}

export default HostVansDetail