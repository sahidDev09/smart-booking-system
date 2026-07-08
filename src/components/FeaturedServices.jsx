import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import './FeaturedServices.css';

const services = [
  {
    id: 1,
    title: 'Luxury Ocean View Suite',
    category: 'Hotel',
    rating: 4.9,
    reviews: 128,
    price: '৳২৯৯',
    unit: '/night',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    color: 'blue'
  },
  {
    id: 2,
    title: 'The Grand Atrium Restaurant',
    category: 'Restaurant',
    rating: 4.8,
    reviews: 342,
    price: '৳৮৫',
    unit: '/person',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    color: 'orange'
  },
  {
    id: 3,
    title: 'General Health Checkup',
    category: 'Doctor',
    rating: 4.9,
    reviews: 89,
    price: '৳১৫০',
    unit: '/visit',
    location: 'City Hospital',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    color: 'green'
  },
  {
    id: 4,
    title: 'Bali Wellness Retreat',
    category: 'Resort',
    rating: 5.0,
    reviews: 210,
    price: '৳৮৯৯',
    unit: '/package',
    location: 'Ubud, Bali',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    color: 'yellow'
  },
  {
    id: 5,
    title: 'Roundtrip to Paris',
    category: 'Flight',
    rating: 4.7,
    reviews: 512,
    price: '৳৪৫০',
    unit: '/ticket',
    location: 'JFK to CDG',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    color: 'purple'
  },
  {
    id: 6,
    title: 'Coldplay Live Concert',
    category: 'Events',
    rating: 4.9,
    reviews: 1024,
    price: '৳১২০',
    unit: '/ticket',
    location: 'Wembley Stadium',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80',
    color: 'pink'
  }
];

const FeaturedServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div>
            <h2 className="services-title">Featured Services</h2>
            <p className="services-subtitle">Handpicked recommendations just for you</p>
          </div>
          <button className="btn btn-outline view-all-btn">
            View All <ChevronRight size={18} />
          </button>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-badge">
                  <Star className="star-icon" size={14} fill="currentColor" />
                  <span>{service.rating} ({service.reviews})</span>
                </div>
                <div className={`category-tag text-${service.color} bg-${service.color}-light`}>
                  {service.category}
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                
                <div className="service-details">
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{service.location}</span>
                  </div>
                </div>

                <div className="service-footer">
                  <div className="service-price">
                    <span className="price-amount">{service.price}</span>
                    <span className="price-unit">{service.unit}</span>
                  </div>
                  <button className="btn btn-primary book-btn">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
