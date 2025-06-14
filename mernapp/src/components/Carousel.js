import React from 'react'

export default function Carousel() {
  return (
    <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://t4.ftcdn.net/jpg/08/19/67/05/360_F_819670573_NZd1juWhiI3nE06UTRHd5BIYdy3a7mWe.jpg" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.shutterstock.com/image-photo/hyderabadi-chicken-biryani-aromatic-flavorful-260nw-2497040151.jpg" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>
  )
}
