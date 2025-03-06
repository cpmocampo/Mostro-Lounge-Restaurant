import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

///////////// DATA ////////////////////////
const menuData = [
  {
    name: "Steak Tartare",
    description:
      "A classic dish made with high-quality raw beef, seasoned with capers, onions, and a raw egg yolk.",
    price: 18,
    image: "foodlist/steak_tartare.png",
    soldOut: false,
  },
  {
    name: "Stuffed Mashed Potato",
    description:
      "Creamy mashed potatoes stuffed with cheese, bacon, and chives.",
    price: 12,
    image: "foodlist/stuffed_mashed_potatoes.png",
    soldOut: false,
  },
  {
    name: "Trout Amandine",
    description:
      "Pan-seared trout topped with a buttery almond sauce, served with seasonal vegetables.",
    price: 22,
    image: "foodlist/trout_amandine.png",
    soldOut: true,
  },
  {
    name: "Lasagna",
    description:
      "Layers of pasta, rich meat sauce, béchamel, and melted cheese, baked to perfection.",
    price: 16,
    image: "foodlist/lasagna.png",
    soldOut: false,
  },
  {
    name: "Vessie Chicken",
    description:
      "A traditional French dish where chicken is cooked inside a pig's bladder for a unique flavor and presentation.",
    price: 26,
    image: "foodlist/vessie_chicken.png",
    soldOut: false,
  },
  {
    name: "Seafood Soup",
    description:
      "A hearty soup made with a mix of fresh seafood like shrimp, mussels, and fish in a flavorful broth.",
    price: 14,
    image: "foodlist/seafood_soup.png",
    soldOut: false,
  },
];

////////////////////////// CODE ////////////

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Mostro Lounge</h1>
    </header>
  );
}

function Menu() {
  const menuCount = menuData.length;
  return (
    <main className="menu">
      <h2 className="menu">Our Menu</h2>

      {menuCount > 0 ? (
        <>
          <p>
            From rich, indulgent creations to fresh, vibrant plates, our menu is
            designed to take you on a culinary journey that is as exciting as it
            is satisfying.
          </p>

          <ul className="foods">
            {menuData.map((food) => (
              <Foodlist foodObj={food} key={food.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please visit us later.</p>
      )}
    </main>
  );
}

function Foodlist({ foodObj }) {
  return (
    <li className={`food ${foodObj.soldOut ? "sold-out" : ""}`}>
      <img src={foodObj.image} alt={foodObj.name} />
      <div>
        <h3>{foodObj.name}</h3>
        <p class>{foodObj.description}</p>
        <span>{foodObj.soldOut ? "SOLD OUT" : foodObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour <= closeHour && hour >= openHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
