import './Testimonials.styles.css';
import {testimonials} from '../../data';
import star from '../../images/star.svg';

const Testimonials = () => {
    const testimonialLinks = testimonials.map(({ id, image, name }) => {
        return (
            <div key={id} className='testimonials-map-container'>
                <img src={image} alt={name} className='testimonials-image' />
                <div className='testimonials-stars'>
                <img src={star} alt='ratings' className='testimonials-star' />
                <img src={star} alt='ratings' className='testimonials-star' />
                <img src={star} alt='ratings' className='testimonials-star' />
                <img src={star} alt='ratings' className='testimonials-star' />
                <img src={star} alt='ratings' className='testimonials-star' />
                </div>
            <p className='testimonials-name'>{name}</p>
            <p className='testimonials-descriptions'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          reiciendis. Possimus voluptas perspiciatis nisi eveniet odit
          doloribus.
            </p>
            </div>
        );
    });

    return (
        <section name='testimonials' className='testimonials'>
            <div className='testimonials-header'>
            <h3 className='testimonials-title'>Testimonials</h3>
            <h2 className='testimonials-details'>Read what others have to say</h2>
            <div className='testimonials-background'>
            <div className='testimonials-container'>{testimonialLinks}</div>
            </div>
            </div>
        </section>
    );
};

export default Testimonials;