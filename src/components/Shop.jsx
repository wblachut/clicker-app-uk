import React from "react";
import { connect } from "react-redux";
import { spendGold, lvlUp, addItem, addAchievement, incrementFactor, incrementTPS, incrementPlanters,  } from "../redux/actions";

import items from "../JSON/items.json";
import leaf from '../icons/maple-leaf.svg'
import pine from '../icons/pine-white.svg'

const Shop = (props) => {

  const onShopItemClick = item => {
    if (item.isOwned) return
    // console.log(item.require, item.price, );
    if (item.require > props.count) return
    console.log('cost of the item', item.price);
    handleItemImplementation(item);
    // props.onSpendGold(item.price);
    props.onAddItem();
    item.isOwned = true;
  }

  const handleItemImplementation = item => {
    if (item.type === 'count') props.onIncrementFactor(item.add);
    if (item.type === 'treesPerSec') props.onIncrementTPS(item.add);
    if (item.type === 'tree') handleTreeChange();
  }

  const handleTreeChange = item => {
    console.log(`tree change to: ${item.name} (${item.image})`)
  }

  return (
    <div className="shop-container right row">
      <h5 className="center">Shop</h5>
      <p>Buy new items to improve planting your trees</p>
      <div className="items-display col m10 offset-m1 row">
        {items.map((item) => (
          <div 
          className="shop-item col s12 m6 hoverable valign-wrapper card"
          key={item.id}
          onClick={() => onShopItemClick(item)}>
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
            {/* If lvl <= item.require */}
          {(item.require >= props.count + 1) ? (
            <div className="item-locked teal darken-4 circle valign-wrapper">
              <i className="material-icons white-text">lock</i>
            </div>) : (
            <div className="item-available teal lighten-4 circle valign-wrapper">
            </div>)
          }
          {item.isOwned && (
            <div className="item-owned yellow darken-3 circle valign-wrapper">
            </div>)}
          </div>
        ))}
      </div>
    </div >
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
  lvl: state.lvl,
  gold: state.gold,
  factor: state.factor,
  planters: state.planters,
  treesPerSec: state.treesPerSec,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementFactor: (ammount) => dispatch(incrementFactor(ammount)),
  onIncrementTPS: (ammount) => dispatch(incrementTPS(ammount)),
  onIncrementPlanters: (ammount) => dispatch(incrementPlanters(ammount)),
  onLvlUp: (lvl) => dispatch(lvlUp(lvl)),
  onSpendGold: () => dispatch(spendGold()),
  onAddItem: () => dispatch(addItem()),
  onAddAchievement: () => dispatch(addAchievement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
