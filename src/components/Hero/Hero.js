import React from 'react';
import styles from './Hero.module.css';
import QTifyHeadphone from '../../assets/vibrating-headphone-hero.svg';

function Hero() {
  return (
    <div className={styles.hero}>

        <div>
            <h1>
            100 Thousand Songs, ad-free
            </h1>
            <h1>
            Over thousands podcast episodes
            </h1>

        </div>

        <div>
            <img src={QTifyHeadphone} alt="Hero content"/>
        </div>
    </div>
  )
}

export default Hero