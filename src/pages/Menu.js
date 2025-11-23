import React from "react";
import '../styles/Menu.css'
import classicCheese from "../assets/classicCheese.jpg";
import bbqBacon from "../assets/bbqBacon.avif";
import veggieBurger from "../assets/veggieBurger.webp";
import MushroomSwiss from "../assets/MushroomSwiss.jpg";
import DoubleSmash from "../assets/DoubleSmash.jpg";
import Truffle from "../assets/Truffle.webp";
import BlueCheese from "../assets/BlueCheese.jpg";
import IcedCramel from "../assets/IcedCaramel.jpg";
import Lemonade from "../assets/FreshLemon.avif";
import Sparkling from "../assets/Sparkling.jpg";
import Milkshake from "../assets/Milkshake.jpg";
import CocaCola from "../assets/Cola1.webp";
import RedWine from "../assets/Wine.jpg";
import Orange from "../assets/Orange.jpg";
import Pepsi from "../assets/Pepsi1.jpg";





const Menu = () => {
  
  const menuItems = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      image: classicCheese,
      price: "$8.99"
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      image: bbqBacon,
      price: "$10.49"
    },
    {
      id: 3,
      name: "Veggie Delight",
      image: veggieBurger,
      price: "$7.99"
    },
     {
      id: 4,
      name: " Mushroom Swiss Burger",
      image: MushroomSwiss,
      price: "$9.99"
    },
     {
      id: 5,
      name: " Double Smash Burger",
      image: DoubleSmash,
      price: "$10.99"
    },
     {
      id: 6,
      name: "Truffle Burger",
      image: Truffle,
      price: "$8.99"
    },
     {
      id: 7,
      name: " Blue Cheese Bacon Burger",
      image: BlueCheese,
      price: "$13.99"
    }
  ];
  const drinks = [
    { id: 1, name: "Iced Caramel Macchiato", price: 4.99, image: IcedCramel },
    { id: 2, name: "Fresh Lemonade", price: 3.99, image: Lemonade },
    { id: 3, name: "Sparkling Water", price: 2.99, image: Sparkling },
    { id: 4, name: "Classic Milkshake", price: 5.99, image: Milkshake },
    { id: 5, name: "CocaCola", price: 1.99, image: CocaCola },
    { id: 6, name: "Red wine", price: 8.99, image: RedWine },
    { id: 7, name: "Fresh Orange", price: 3.99, image: Orange },
    { id: 8, name: "Pepsi", price: 1.99, image: Pepsi },
    
    
];

 
  const MenuItem = ({ name, image, price }) => (
    <div className="menu-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );

  return (
    <div className="menu">
      <h2>Our Burgers</h2>
     

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
       <h2 style={{ marginTop: '50px' }}>Our Drinks</h2> 
      
      <div className="menu-grid">
        {drinks.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
       

</div>
  );
};

   
    
  
export default Menu;
