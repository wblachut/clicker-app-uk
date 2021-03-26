import React from "react";
import { connect } from "react-redux";
import { spendGold, lvlUp, addItem, addAchievement, incrementFactor, incrementTPS, incrementPlanters, changeTreeIcons } from "../redux/actions";

import leaf from '../icons/maple-leaf.svg'
import pine from '../icons/pine-white.svg'

const Shop = (props) => {

  const onShopItemClick = item => {
    if (item.isOwned) return
    if (item.require > props.count) return
    if (item.price > props.gold) return
    console.log('cost of the item', item.price);
    handleItemImplementation(item);
    props.onSpendGold(item.price);
    item.isOwned = true;
    props.onAddItem(props.items);
  }

  const handleItemImplementation = item => {
    if (item.type === 'count') props.onIncrementFactor(item.add);
    if (item.type === 'treesPerSec') props.onIncrementTPS(item.add);
    if (item.type === 'tree') handleTreeChange(item);
  }

  const handleTreeChange = item => {
    console.log(`tree change to: ${item.name} (${item.image})`)
    props.onChangeTreeIcons(item.add)
  }

  return (
    <div className="shop-container right row">
      <h5 className="center">Shop</h5>
      <p>Buy new props.items to improve planting your trees</p>
      <div className="props.items-display col m10 offset-m1 row">
        {props.items.map((item) => (
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
            <span className="item-require badge teal darken-4 white-text hide-on-small-only">{`${item.require} `}
             <img className="tree-icon" alt="white-pine" src={pine} />
             </span>
            <span className="item-require badge orange darken-3 white-text">{`${item.price} `}
             <img className="tree-icon" alt="golden-leaf" src={leaf}  />
             </span><br/>
            <span className="item-description grey-text">{item.description}</span>
            </div>
          {(item.require >= props.count + 1) ? (
            <div className="item-locked teal darken-4 circle valign-wrapper">
              <i className="material-icons white-text hide-on-small-only">lock</i>
              <span className="item-require  badge teal darken-4 white-text hide-on-med-and-up">{`${item.require} `}
             <img className="tree-icon" alt="white-pine" src={pine} />
             </span>
            </div>)
             : (
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
  items: state.items,
  treesPerSec: state.treesPerSec,
  treeIcons: state.treeIcons,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementFactor: (ammount) => dispatch(incrementFactor(ammount)),
  onIncrementTPS: (ammount) => dispatch(incrementTPS(ammount)),
  onIncrementPlanters: (ammount) => dispatch(incrementPlanters(ammount)),
  onLvlUp: (lvl) => dispatch(lvlUp(lvl)),
  onSpendGold: (ammount) => dispatch(spendGold(ammount)),
  onAddItem: (items) => dispatch(addItem(items)),
  onAddAchievement: () => dispatch(addAchievement()),
  onChangeTreeIcons: (treeIcon) => dispatch(changeTreeIcons(treeIcon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
