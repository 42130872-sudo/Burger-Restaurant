import React, { useState, useMemo, useEffect } from 'react';
import '../styles/AddToCart.css';
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


const initialBurgers = [
    { id: 1, name: "Classic Cheeseburger", price: 8.99, image: classicCheese },
    { id: 2, name: "BBQ Bacon Burger", price: 10.49, image: bbqBacon},
    { id: 3, name: "Veggie Delight", price: 7.99, image: veggieBurger},
    { id: 4, name: "Mushroom Swiss Burger", price: 9.99, image: MushroomSwiss },
    { id: 5, name: "Double Smash Burger", price: 10.99, image: DoubleSmash},
    { id: 6, name: "Truffle Burger", price: 8.99, image: Truffle },
    { id: 7, name: "Blue Cheese Bacon Burger", price: 13.99, image: BlueCheese },
    { id: 8, name: "Iced Caramel", price: 4.99, image: IcedCramel },
    { id: 9, name: "Fresh Lemonade", price: 3.99, image: Lemonade },
    { id: 10, name: "Sparkiling Water", price: 2.99, image: Sparkling },
    { id: 11, name: "Classic Milkshake", price: 5.99, image: Milkshake },
    { id: 12, name: "Coca Cola", price: 1.99, image: CocaCola },
    { id: 13, name: "Red Wine", price: 8.99, image: RedWine },
    { id: 14, name: "Fresh Orange", price: 3.99, image: Orange },
    { id: 15, name: "Pepsi", price: 1.99, image: Pepsi },
   
];


const BurgerItem = ({ item, quantity, onQuantityChange, onAddToCart }) => (
    <div className="burger-item-card">
       
        <img src={item.image} alt={item.name} className="burger-item-image" />
        
        <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price.toFixed(2)}</p>
        </div>
       
    
        <div className="item-controls">
           
            <div className="quantity-controls">
                <button
                    onClick={() => onQuantityChange(item.id, -1)}
                    disabled={quantity <= 1}
                >
                    −
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                    onClick={() => onQuantityChange(item.id, 1)}
                >
                    +
                </button>
            </div>
            
            <button
                onClick={() => onAddToCart(item, quantity)}
                className="add-to-cart-btn"
                disabled={quantity < 1}
            >
                Add to Cart
            </button>
        </div>
    </div>
);

const AddToCart = () => {
    
    const [quantities, setQuantities] = useState(
        initialBurgers.reduce((acc, burger) => ({ ...acc, [burger.id]: 1 }), {})
    );
    
    const [cart, setCart] = useState([]);
   
    const [submittedOrders, setSubmittedOrders] = useState([]);

   
    useEffect(() => {
        const storedOrders = localStorage.getItem('submittedOrders');
        if (storedOrders) {
            try {
               
                setSubmittedOrders(JSON.parse(storedOrders));
            } catch (e) {
                console.error("Could not parse submitted orders from localStorage", e);
               
                localStorage.removeItem('submittedOrders');
                setSubmittedOrders([]); 
            }
        }
    }, []);

  
    const handleQuantityChange = (id, delta) => {
        setQuantities(prevQuantities => {
            const newQuantity = Math.max(1, (prevQuantities[id] || 0) + delta);
            return { ...prevQuantities, [id]: newQuantity };
        });
    };

   
    const handleAddToCart = (item, quantity) => {
        if (quantity < 1) return;

        setCart(prevCart => {
            const existingIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            const newCart = [...prevCart];

            if (existingIndex > -1) {
                newCart[existingIndex].quantity += quantity;
            } else {
                newCart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: quantity,
                });
            }

            return newCart;
        });

       
        setQuantities(prevQuantities => ({ ...prevQuantities, [item.id]: 1 }));
    };

  
    const handleRemoveItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

   
    const handleSubmitOrder = () => {
        if (cart.length === 0) {
            console.warn("Cannot submit an empty order.");
            return;
        }

        
        const newOrder = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price.toFixed(2),
            })),
            total: grandTotal.toFixed(2)
        };

        const updatedOrders = [newOrder, ...submittedOrders]; 
        
        
        localStorage.setItem('submittedOrders', JSON.stringify(updatedOrders));
        
        
        setSubmittedOrders(updatedOrders);
        setCart([]);
        
      
        setQuantities(initialBurgers.reduce((acc, burger) => ({ ...acc, [burger.id]: 1 }), {}));
    };


   
    const grandTotal = useMemo(() => {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }, [cart]);

    return (
        <div className="add-to-cart-page">
            
            <header className="page-header">
                <h1 className="header-title">Order Your Burgers</h1>
                <p className="header-subtitle">Select your quantity and add to your cart.</p>
            </header>

          
            <section className="burger-selection-section">
                <h2 className="section-heading">Available Items</h2>
                <div className="burger-list">
                    {initialBurgers.map(item => (
                        <BurgerItem
                            key={item.id}
                            item={item}
                            quantity={quantities[item.id] || 1}
                            onQuantityChange={handleQuantityChange}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </section>

          
            <section className="cart-summary-section">
                <h2 className="section-heading">Your Cart Summary</h2>
                
                {cart.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty. Start adding some delicious burgers!</p>
                ) : (
                    <div className="cart-table-container">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Burger Name</th>
                                    <th>Price/Unit</th>
                                    <th>Quantity</th>
                                    <th>Item Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id} className="cart-item-row">
                                        <td className="item-name-cell">
                                            {item.name}
                                        </td>
                                        <td>
                                            ${item.price.toFixed(2)}
                                        </td>
                                        <td className="item-quantity-cell">
                                            {item.quantity}
                                        </td>
                                        <td className="item-total-cell">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                        <td> 
                                            <button 
                                                className="remove-item-btn"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                              
                                <tr className="grand-total-row">
                                    <td colSpan="3" className="grand-total-label">
                                        Total Price
                                    </td>
                                    <td colSpan="2" className="grand-total-amount"> 
                                        ${grandTotal.toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    
                        <div className="submit-order-btn-container">
                            <button 
                                className="submit-order-btn"
                                onClick={handleSubmitOrder}
                            >
                                Submit Order
                            </button>
                        </div>
                    </div>
                )}
            </section>

          
            <section className="submitted-orders-section">
                <h2 className="section-heading">Submitted Orders History (Local Host)</h2>
                {submittedOrders.length === 0 ? (
                    <p className="empty-cart-message">No orders submitted to local storage yet.</p>
                ) : (
                    <ul className="order-list">
                        {submittedOrders.map(order => (
                            <li key={order.id} className="order-item">
                                <div className="order-header">
                                    <span>Order ID: {order.id.toString().slice(-4)}</span>
                                    <span>Date: {order.date}</span>
                                </div>
                                <ul className="order-details-list">
                                    {order.items.map((item, index) => (
                                        <li key={index}>
                                            {item.name} x{item.quantity} (${item.price} each)
                                        </li>
                                    ))}
                                </ul>
                                <p className="order-total">Total: ${order.total}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default AddToCart;