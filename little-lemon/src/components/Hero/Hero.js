import './Hero.styles.css';
import restaurantFood from '../images/restaurantfood.jpg';
import { Link as LinkR } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='display-container'>
                <h1 className='display-title'>Little Lemon</h1>
                <h3 className='display-subtitle'>Based in Chicago</h3>
                <h4 className='display-text'>
                We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist.
                </h4>
                <LinkR to='/bookings' className='reserve-button'></LinkR>
            </div>

            <div className='image-container'>
                <img
                src={restaurantFood}
                alt='restaurant food'
                className='display-image'
                />
            </div>
        </section>
    );
};

export default Hero;