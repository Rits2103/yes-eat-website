const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2>How It Works</h2>

      <div className="how-cards">
        <div className="how-card">
          <img src="/icons/choose-meal.png" alt="Choose Meal" />
          <p>Choose Your Meal</p>
        </div>

        <div className="how-card">
          <img src="/icons/payment.png" alt="Payment" />
          <p>Make Payment</p>
        </div>

        <div className="how-card">
          <img src="/icons/delivery.png" alt="Delivery" />
          <p>Delivery At Doorstep</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
