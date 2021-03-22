import React from "react";
import items from "../JSON/items.json";
import leaf from '../icons/maple-leaf.svg'
import pine from '../icons/pine-white.svg'

const Shop = () => {
  return (
    <div className="shop-container right row">
      <h5 className="center">Shop</h5>
      <p>Buy new items to improve planting your trees</p>
      <div className="items-display  col m10 offset-m1 row">
        {items.map((item) => (
          (item.isUnlocked === "true" &&
          <div className="shop-item col s12 m6 hoverable valign-wrapper card" key={item.id}>
            <div
              className="item-img circle left"
              style={{
                backgroundImage: `url(${item.image})`
              }}></div>
            <div className="item-main left-align" >
            <span className="item-name card-title">{item.name} </span>
            <span className="item-require badge teal darken-4 white-text">{`${item.require} `}
             <img className="tree-icon" alt="white-pine" src={pine} />
             </span>
            <span className="item-require badge orange darken-3 white-text">{`${item.price} `}
             <img className="tree-icon" alt="golden-leaf" src={leaf}  />
             </span><br/>
            <span className="item-description">{item.description}</span>
            </div>
          </div>)
        ))}
      </div>
    </div >
  );
};

export default Shop;
