import { Header, Navigation, Footer } from "../components"
import Head from "next/head";
import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Navigation />
      &nbsp; &nbsp;
      {/* <div className="text-center">
        <Carousel>
        <img className="object-scale-down h-48 w-96" src="https://i.etsystatic.com/17693570/r/il/875be0/1832037819/il_794xN.1832037819_ecow.jpg" alt="image2"/>  
        <img className="object-scale-down h-48 w-96" src="https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=pexels-pixabay-159644.jpg&fm=jpg" alt="img"/>
        <img className="object-scale-down h-48 w-96" src="https://i.pinimg.com/736x/a8/b5/e0/a8b5e088244592a9363f61fede4a3a5a.jpg" alt="image2"/>  
        </Carousel>
        </div> */}
      <Carousel className="m-auto w-50">
        <Carousel.Item>
          <img
            className="d-block"
            src="https://i.etsystatic.com/17693570/r/il/875be0/1832037819/il_794xN.1832037819_ecow.jpg"
            alt="First slide" />
          <Carousel.Caption>
            <h4>First slide</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=pexels-pixabay-159644.jpg&fm=jpg"
            alt="Second slide" />
          <Carousel.Caption>
            <h4>Second slide</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://i.pinimg.com/736x/a8/b5/e0/a8b5e088244592a9363f61fede4a3a5a.jpg"
            alt="Third slide" />
          <Carousel.Caption>
            <h4>Third slide </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className='text-center font-semibold text-xl p-2'>
        Our idea for this project is to create a website called crafts for the craftsmen to present their products on. The craftsmen will also be able to sell their products to the customers easily.
        Nowadays online shopping is taking over the world, so those who cannot afford having a physical store somewhere can take advantage of that having an online shop. The main purpose of creating the website is to show the world that there is a lot of talented people who can do fascinating things but cant afford opening a shop or creating a website, so this can provide these people with an opportunity to do exactly what they have always dreamed of but could not afford.
        At the same time, we will offer events for the craftsmen and the customers to come, see, and inspect the products and the pieces in real life as they wish.
      </p>
      <br></br>
      <br />
      <Footer />

    </>
  )
}

