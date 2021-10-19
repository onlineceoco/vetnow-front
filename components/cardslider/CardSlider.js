import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./slideronestyle.module.css";
export default class CardSlider extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 6,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div style={ {background: "#fff"}}>
        <Slider {...settings}>
          <div style={ {background: "#fff"}}>
            <div className={styles.card}>
              <img src="/images/book1.jpg" alt="" />
            <h1 id={styles.title} >آموزش مرغ گوشتی</h1>
            </div>
          </div>
         
          <div>
            <div className={styles.card}>
              <img src="/images/book2.jpg" alt="" />
              <h1 id={styles.title} >بیماری های طیور</h1>
            </div>
          </div>

          <div>
            <div className={styles.card}>
              <img src="/images/book1.jpg" alt="" />
            <h1 id={styles.title} >بیماری های طیور</h1>
            </div>
          </div>

          <div>
            <div className={styles.card}>
              <img src="/images/book2.jpg" alt="" />
            <h1 id={styles.title} >بیماری های طیور</h1>
            </div>
          </div>

          
          <div>
            <div className={styles.card}>
              <img src="/images/book1.jpg" alt="" />
              <h1 id={styles.title} >آموزش مرغ گوشتی</h1>
            </div>
             
          </div>
         
         
          <div>
            <div className={styles.card}>
              <img src="/images/book2.jpg" alt="" />
              <h1 id={styles.title} >بیماری های طیور</h1>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
