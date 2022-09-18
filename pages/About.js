import { Header, Navigation, Footer } from "../components"
import Head from "next/head";
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function About(){
    return (
        <>
        <Head>
        <title>About Page</title>
        </Head>
        <Header/>
        <Navigation/>
        &nbsp; &nbsp;
        <div className="text-center">
        <Carousel>
        <img className="object-scale-down h-48 w-96" src="https://i.etsystatic.com/17693570/r/il/875be0/1832037819/il_794xN.1832037819_ecow.jpg" alt="image2"/>  
        <img className="object-scale-down h-48 w-96" src="https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=pexels-pixabay-159644.jpg&fm=jpg" alt="img"/>
        <img className="object-scale-down h-48 w-96" src="https://i.pinimg.com/736x/a8/b5/e0/a8b5e088244592a9363f61fede4a3a5a.jpg" alt="image2"/>  
        </Carousel>
        </div>
        {/* <div id="default-carousel" class="relative" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="https://i.etsystatic.com/17693570/r/il/875be0/1832037819/il_794xN.1832037819_ecow.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=pexels-pixabay-159644.jpg&fm=jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.pinimg.com/736x/a8/b5/e0/a8b5e088244592a9363f61fede4a3a5a.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        </div>
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
        </button>
        </div> */}
        &nbsp;
        <p className='text-center font-semibold text-xl'>
            Our idea for this project is to create a website called crafts for the craftsmen to present their products on. The craftsmen will also be able to sell their products to the customers easily. 
            Nowadays online shopping is taking over the world, so those who cannot afford having a physical store somewhere can take advantage of that having an online shop. The main purpose of creating the website is to show the world that there is a lot of talented people who can do fascinating things but can't afford opening a shop or creating a website, so this can provide these people with an opportunity to do exactly what they have always dreamed of but could not afford. 
            At the same time, we will offer events for the craftsmen and the customers to come, see, and inspect the products and the pieces in real life as they wish.
        </p>
        <Footer/>
        </>
    )
}

// src="https://i.etsystatic.com/17693570/r/il/875be0/1832037819/il_794xN.1832037819_ecow.jpg"
// src="https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=pexels-pixabay-159644.jpg&fm=jpg"
// src="https://i.pinimg.com/736x/a8/b5/e0/a8b5e088244592a9363f61fede4a3a5a.jpg"

