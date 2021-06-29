import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image,  ImageBackground} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/AccessoryViewStyles.js';
import Toggler from './Toggler.js';
import CheckoutModal from './CheckoutModal.js';

// get the coach from redux and map the outfits accordingly

// get equiped list of items

const categoryList = ['All','Face','Top','Bottom','Shoes','Gloves','Extra', 'Set',];

// current buyable items
const dummy = [
  {
    id: 'Extra-h1',
    name: 'hat',
    cost: 10,
    category: 'Extra',
    sub: 'Extra',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')
  },
  {
    id: 'Top-s1',
    name: 'shirt',
    cost: 10,
    category: 'Top',
    sub: 'Top',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'Bottom-p1',
    name: 'pants',
    cost: 10,
    category: 'Bottom',
    sub: 'Bottom',
    image: require('../../assets/cashShop/auora/auora_OGpants.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'Top-j1',
    name: 'jacket',
    cost: 10,
    category: 'Top',
    sub: 'Top',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'Bottom-sh1',
    name: 'shorts',
    cost: 10,
    category: 'Bottom',
    sub: 'Bottom',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')
  },

  {
    id: 'Glasses-g1',
    name: 'glasses',
    cost: 10,
    category: 'Face',
    sub: 'Glasses',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_ButterflyShade.png')
  },

  {
    id: 'Glasses-g2',
    name: 'glasses',
    cost: 10,
    category: 'Face',
    sub: 'Glasses',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_ButterflyShade.png')
  },

];

const dummyBought = [
  {
    id: 'sk1',
    name: 'skirts',
    category: 'Bottom',
    sub: 'Bottom',
    cost: null,
    imageSrc: '...'
  },
  {
    id: 'sh2',
    name: 'shorts',
    category: 'Bottom',
    sub: 'Bottom',
    cost: null,
    imageSrc: '...'
  },
];

const Grid = ({filter, shopView, currentItems, selectOrDeselect, cart}) => {
  const activeStyle = {
    borderColor: '#678D98',
    borderWidth: 4,
    borderRadius: 10
  };

  // in shop view
  const handleEquip = () => {
    // equip the item by submitting all current items as a snapshot
    // send the items through Redux action
    // if promise comes back successful, re-render the avatar
    // if not successful, means there's no internet, store the snapshot locally

  };

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>selectOrDeselect(item)} style={[styles.gridItem, cart[item.sub].id === item.id && activeStyle]}>
        <View style={styles.gridItemTop}>
        <Image style={styles.icon} source={item.icon}/>
        </View>
        <View style={styles.gridItemBottom}>
          <Text style={styles.text}>
            {shopView?
              item.cost
              :
              cart[item.sub].id === item.id ? 'EQUIPED' : 'EQUIP'
            }
          </Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.gridContainer}>
      <FlatList horizontal={false} numColumns={4} renderItem={renderItems} data={shopView ?currentItems: dummyBought}/>
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
  const [selected, setSelected] = useState({
    Hat: false, Glasses: false, Earrings: false, Mask: false,
    Top: false, Bottom: false, Shoes: false, Extra: false, Set: false, Background: false, Pet: false
  })

  /*
    Input: itemId String
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
    //   // get the sub-category and assign the entire obj to that sub-category
      newObj[sub] = item;
    }
    setSelected(newObj);

    //   // const newObj = {...cart};
    //   // newObj[id] = cost;
    //   // addToCart(newObj);
    // }
  };

  const handleToggle = (bool) => {
    isShopView(bool)
  };

  const putOnClothes = (selected) => {
    let outfitList = [];
    for (const key in selected) {
      if (selected[key]) {
        outfitList.push(
          <Image resizeMode='contain' style={styles.avatar} source={selected[key].image}/>
          );
      }
    }
    return outfitList;
  }

  useEffect(()=>{

    // if the currentCategoryIndex changes, then filter the Flatlist accordingly
      const newItems = dummy.filter(item=>{
        if (categoryList[currentCategoryIndex] === 'All') {
          return item.category !== categoryList[currentCategoryIndex]
        } else {
          return item.category === categoryList[currentCategoryIndex]
        }
      });
      setCurrentItems(newItems);

    // if cart changes, then re-calculate total coins
  }, [currentCategoryIndex]);

  useEffect(()=>{
    console.log(totalCost)
    // iterate cart and calculate the total cost
    let newCost = 0;
    for (const key in selected) {
      if (selected[key]) {
        newCost += selected[key].cost;
      }
    }
    changeCost(newCost);
  }, [selected]);

  // convert cart in from object to list of objects
  const convertCartToList = (selected) => {
    let cartList = [];
    for (const key in selected) {
      if (selected[key]) {
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

          {checkout && <CheckoutModal cost={totalCost} itemList={convertCartToList(selected)} byOutfit={false} checkout={checkout} isCheckout={isCheckout}/>}

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

