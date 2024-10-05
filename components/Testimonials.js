// components/Testimonials.js

const testimonials = [
  {
    name: 'John Doe',
    role: 'Project Manager',
    feedback: 'Working with [Your Name] has been a game changer for our team. Their skills and creativity brought our project to life!',
    image: '/images/testimonials/john.jpg', // Replace with your image path
  },
  {
    name: 'Jane Smith',
    role: 'Product Designer',
    feedback: 'Incredible attention to detail and a great team player! I highly recommend [Your Name] for any design work.',
    image: '/images/testimonials/jane.jpg', // Replace with your image path
  },
  {
    name: 'Emily Johnson',
    role: 'Software Engineer',
    feedback: 'Not only did [Your Name] deliver exceptional work, but their dedication to the project made all the difference.',
    image: '/images/testimonials/emily.jpg', // Replace with your image path
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What People Are Saying</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .testimonials-section {
          padding: 20px;
          background-color: #f9f9f9;
        }
        .testimonial-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .testimonial {
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .testimonial-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
