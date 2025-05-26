const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          You feet deserve the best and were here to help ypu with our shoes.
          You feet deserve the best and were here to help ypu with our shoes.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p>Also avaible on</p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default HeroSection;
