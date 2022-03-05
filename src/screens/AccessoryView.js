import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image,  ImageBackground} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import styles from '../stylesheets/AccessoryViewStyles.js';
import Toggler from './Toggler.js';
import CheckoutModal from './CheckoutModal.js';
import { storeData } from '../data/cashShopData.js';
import { equippedSnapshot } from '../actions/cashShop_actions.js';

const initialCartState = {Hat: false, Glasses: false, Earrings: false, Mask: false,
Top: false, Bottom: false, Shoes: false, Extra: false, Set: false, Background: false, Pet: false};

const categoryList = ['All','Face','Top','Bottom','Shoes','Gloves','Extra', 'Set',];

const Grid = ({filter, shopView, currentItems, selectOrDeselect, cart}) => {
  const activeStyle = {
    borderColor: '#678D98',
    borderWidth: 4,
    borderRadius: 10
  };



  const renderItems = ({item}) => {
    const isItemAlreadyPurchased = shopView === true && item.purchased === true;
  
    if (isItemAlreadyPurchased) {
      return (
        <View style={[styles.gridItem]}>
          <View style={styles.gridItemTop}>
            <Image style={styles.icon} source={item.icon}/>
          </View>
          <View style={styles.gridItemBottom}>
            <Text>Bought</Text>
          </View>
        </View>
      )
    }

    return (
      <TouchableOpacity onPress={()=>selectOrDeselect(item)} style={[styles.gridItem, cart[item.sub].id === item.id && activeStyle]}>
        <View style={styles.gridItemTop}>
        <Image style={styles.icon} source={item.icon}/>
        </View>
        <View style={styles.gridItemBottom}>
          {shopView ?
            <>
            <Image style={styles.coin} source={require('../../assets/cashShop/coin.png')}/>
            <Text style={[styles.text, styles.price]}>
              {item.cost}
            </Text>
            </>
            :
            <Text>
            {cart[item.sub].id === item.id ? 'EQUIPPED' : 'EQUIP'}
            </Text>
          }
        </View>
      </TouchableOpacity>

    )
  };

  return (
    <View style={styles.gridContainer}>
      <FlatList horizontal={false} numColumns={4} renderItem={renderItems} data={currentItems}/>
    </View>
  )
};

const Categories = ({current, setCurrent}) => {
  const activeStyle = {
    backgroundColor: '#A5DFF0'
  };

  const renderItem = ({item, index}) => {
    return (
    <TouchableOpacity onPress={()=>setCurrent(index)} style={[styles.category,item === current && activeStyle]}>
      <Text style={styles.text}>
        {item}
      </Text>
    </TouchableOpacity>
    )
  };
  return (
    <View style={styles.categories}>
      <FlatList horizontal keyExtractor={item=>item} data={categoryList} renderItem={renderItem}/>
    </View>
  )
};

const AccessoryView =()=>{
  const dispatch = useDispatch();
  const purchasedItems = useSelector(state=>state.cashShop.purchased);
  const equippedItems = useSelector(state=>state.cashShop.equipped)

  const [purchasedItemsHash, setItemsHash] = useState(null);

  const [shopView, isShopView] = useState(true);
  // the current selected category
  const [currentCategoryIndex, setIndex] = useState(0);
  // all items currently rendering
  const [currentItems, setCurrentItems] = useState({});
  // trigger for checkout modal
  const [checkout, isCheckout] = useState(false);
  const [currentFilter, changeFilter] = useState(categoryList[currentCategoryIndex]);
  // current total cost
  const [totalCost, changeCost] = useState(0);
  // only one item of each type can be selected at once
  const [selected, setSelected] = useState(initialCartState)

  // convert the currently equipped array to object containing equipped item for each
  // body part
  const converEquippedArrayToObj = (equippedItemsArray) => {
    if (equippedItemsArray.length === 0) {
      return {}
    }

    const equippedSet = new Set(equippedItemsArray)
    const newObj = {...initialCartState}
    const equippedPieces = []

    storeData.auora.currentStorePieces.forEach(piece=>{
      if (equippedSet.has(piece.id)) {
        equippedPieces.push(piece)
      }
    })

    // convert the equpiped pieces to the obj mapping each item to body parts
    equippedPieces.forEach(piece=>{
      newObj[piece.sub] = piece
    })

    setSelected(newObj)
  }

  /*
    Takes id of an item and adds it to cart if doesnt already exist,
    if it does, then remove it from cart
  */
  const selectOrDeselect = (item) => {
    const {id, sub, cost} = item;
    const newObj = {...selected};
    // if already exist then just set it to false
    if (selected[sub].id === item.id) {
      newObj[sub] = false
    } else {
    // get the sub-category and assign the entire obj to that sub-category
      newObj[sub] = item;
    }
    if (shopView) {
      setSelected(newObj);
    } else {
      handleEquip(newObj)
      setSelected(newObj);
    }
  };

    const handleEquip = (selected) => {
      // equip the item by submitting all current items as a snapshot
      // return the promise to handle this in selectOrDeselect
      dispatch(equippedSnapshot({outfitList:selected}));
      // send the items through Redux action
      // if promise comes back successful, re-render the avatar
      // if not successful, means there's no internet, store the snapshot locally

    };

  const handleToggle = (bool) => {
    isShopView(bool)
  };

  // store the corresponding outfit images with the selected items
  const putOnClothes = (selected) => {
    let outfitList = [];
    for (const key in selected) {
        outfitList.push(
          <Image key={selected[key].id} resizeMode='contain' style={styles.avatar} source={selected[key].image}/>
          );
    }
    return outfitList;
  }

  useEffect(()=>{
    if (purchasedItems) {
      setItemsHash(new Set(purchasedItems))
    }
  }, [purchasedItems])

  useEffect(()=>{
    if (equippedItems) {
      // set currently selected to equippedItems
      converEquippedArrayToObj(equippedItems)
    }
  }, [equippedItems])

  // when switching views, empty out the current selected items from the current view
  // also reset the filter
  useEffect(()=>{
    setIndex(0);
  }, [shopView])

  useEffect(()=>{
    // if the currentCategoryIndex changes, then filter the Flatlist accordingly
      const newItems = storeData.auora.currentStorePieces.filter(item=>{
        // if item id is in the purchased item hash, then we want to assign it with status of "bought"
        if (shopView) {
          item['purchased'] = purchasedItemsHash != null && purchasedItemsHash.has(item.id) === true
        } else {
          if (purchasedItemsHash != null && purchasedItemsHash.has(item.id) === false) {
            return 
          }
        }
        // if either the current filter changes to 'All' render all items that don't have the category property set to 'All', which means this will render all items
        if (categoryList[currentCategoryIndex] === 'All') {
          return item.category !== categoryList[currentCategoryIndex]
        }
          // if the current filter changes to anything other than 'All', then only render the ones that have the matching category property
          return item.category === categoryList[currentCategoryIndex]
      });
      setCurrentItems(newItems);

    // if cart changes, then re-calculate total coins
  }, [currentCategoryIndex, shopView, purchasedItemsHash]);

  useEffect(()=>{
    console.log(totalCost)
    // iterate cart and calculate the total cost
    let newCost = 0;
    for (const key in selected) {
      if (selected[key] && !purchasedItemsHash.has(selected[key].id)) {
        newCost += selected[key].cost;
      }
    }

    changeCost(newCost);
  }, [selected]);

  // convert cart in from object to list of objects
  const convertCartToList = (selected) => {
    let cartList = [];
    for (const key in selected) {
      if (selected[key] && !purchasedItemsHash.has(selected[key].id)) {
        cartList.push(selected[key]);
      }
    }
    return cartList;
  };


    return (
        <View style={styles.main}>
          <View style={styles.previewContainer}>
            <ImageBackground style={{flex:1}} source={require('../../assets/cashShop/background.png')}>
            <View style={styles.previewInnerContainer}>
            <View style={styles.previewLeft}>
              <Image resizeMode='contain' style={styles.avatar} source={require('../../assets/cashShop/auora/auora_base.png')}/>
              {putOnClothes(selected)}
            </View>
            <View style={styles.previewRight}>
            {(totalCost > 0 && shopView) &&
              <View style={styles.coinContainer}>
                <Text style={styles.previewText}>{totalCost} Coins</Text>
              </View>
            }
              {
                (totalCost > 0 && shopView) &&
                  <TouchableOpacity style={styles.buyButton} onPress={()=>isCheckout(true)}>
                    <Text style={styles.previewText}>
                      Buy
                    </Text>
                  </TouchableOpacity>
              }
            </View>
            </View>
            </ImageBackground>
          </View>

          {checkout && <CheckoutModal emptyCart={setSelected} cost={totalCost} itemList={convertCartToList(selected)} byOutfit={false} checkout={checkout} isCheckout={isCheckout}/>}

          <View style={styles.toggle}>
            <Toggler callback={handleToggle} text1='Shop' text2='Wardrobe'/>
          </View>

          <View style={styles.categories}>
            <Categories setCurrent={setIndex} current={categoryList[currentCategoryIndex]}/>
          </View>

          <View style={styles.grid}>
            <Grid cart={selected} filter={currentFilter} selectOrDeselect={selectOrDeselect} currentItems={currentItems} shopView={shopView}/>
          </View>
        </View>
    )
};

export default AccessoryView;

