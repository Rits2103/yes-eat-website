const Plans = () => {
  return (
    <section className="plans-section">

      <div className="plan-card">
        <img src="/images/tiffin.png" alt="Tiffin Plan" />
        <h3>14-Days Tiffin Plan</h3>
        <p>Enjoy two meals a day with variety of sabji, rice and daal</p>
        <button className="btn-primary">Show More</button>
      </div>

      <div className="plan-card">
        <img src="/images/single-meal.png" alt="Single Meal" />
        <h3>Single Meal Order</h3>
        <p>Fresh homemade meals delivered daily</p>
        <button className="btn-primary">Show More</button>
      </div>

      <div className="plan-card">
        <img src="/images/ingredients.jpg" alt="Ingredients" />
        <h3>Our Ingredients</h3>
        <p>Fresh vegetables and quality ingredients</p>
        <button className="btn-primary">Show More</button>
      </div>

    </section>
  );
};

export default Plans;
