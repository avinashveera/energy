// src/components/CarouselSlider.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import slider1 from '../../img/slider1.jpg'
import slider2 from '../../img/slider2.jpeg'
import slider3 from '../../img/slider3.jpg'

// Carousel Images (Replace these with your actual image URLs)
const images = [
  {
    url:slider1, // Replace with your image
    title: "Safe and Reliable Moving Services",
    description: "We ensure smooth and secure relocation for all your needs.",
  },
  {
    url: slider2, // Replace with your image
    title: "Affordable Packing Solutions",
    description: "Experience cost-effective and hassle-free packaging.",
  },
  {
    url: slider3, // Replace with your image
    title: "Timely Delivery Guaranteed",
    description: "We prioritize timely delivery of all your goods.",
  },
];

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' ,mt:4}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '60vh', // Adjust the height as needed
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1,
              }}
            ></Box>

            {/* Text Overlay */}
    {/* Text Overlay */}
<Box
  sx={{
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#fff',
    px: 2,
    display: 'flex',
    alignItems: 'center', // Centers items vertically
    justifyContent: 'center', // Centers items horizontally
    flexDirection: 'column',
    height: '100%', // Takes full height of the slide
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontSize: { xs: '24px', sm: '32px', md: '40px' },
      fontWeight: 'bold',
      textTransform: 'uppercase',
      animation: 'fadeInDown 1s ease',
    }}
  >
    Maa Geeta Packers & Movers
  </Typography>
  <Typography
    variant="h4"
    sx={{
      fontSize: { xs: '18px', sm: '24px', md: '28px' },
      mt: 2,
      animation: 'fadeInUp 1.5s ease',
    }}
  >
    {image.title}
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: '14px', sm: '16px', md: '18px' },
      mt: 1,
      maxWidth: '600px',
      mx: 'auto',
      animation: 'fadeInUp 2s ease',
    }}
  >
    {image.description}
  </Typography>
</Box>

          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselSlider;
