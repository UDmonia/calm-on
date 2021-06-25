import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/AccessoryViewStyles.js';
import Toggler from './Toggler.js';
import CheckoutModal from './CheckoutModal.js';

// get equiped list of items

const categoryList = ['All','Face','Top','Bottom','Shoes','Extra'];

// current buyable items
const dummy = [
  {
    id: 'h1',
    name: 'hat',
    cost: 10,
    category: 'Extra',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')
  },
  {
    id: 's1',
    name: 'shirt',
    cost: 10,
    category: 'Top',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'p1',
    name: 'pants',
    cost: 10,
    category: 'Bottom',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'j1',
    name: 'jacket',
    cost: 10,
    category: 'Top',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'sh1',
    name: 'shorts',
    cost: 10,
    category: 'Bottom',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },
  {
    id: 'g1',
    name: 'glasses',
    cost: 10,
    category: 'Extra',
    image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
    icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')  },

];

const dummyBought = [
  {
    id: 'sk1',
    name: 'skirts',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'sh2',
    name: 'shorts',
    cost: 10,
    imageSrc: '...'
  },
];

const Grid = ({filter, shopView, currentItems, selectOrDeselect, cart}) => {
  console.log(currentItems)
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
      <TouchableOpacity onPress={()=>selectOrDeselect(item.id)} style={[styles.gridItem, cart[item.id] && activeStyle]}>
        <View style={styles.gridItemTop}>
        <Image source={item.icon}/>
        </View>
        <View style={styles.gridItemBottom}>
          <Text style={styles.text}>
            {shopView?
              item.cost
              :
              cart[item.id] ? 'EQUIPED' : 'EQUIP'
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
  // all items currently in cart
  const [cart, addToCart] = useState({});
  // trigger for checkout modal
  const [checkout, isCheckout] = useState(false);
  const [currentFilter, changeFilter] = useState(categoryList[currentCategoryIndex]);

  /*
    Input: itemId String
    Takes id of an item and adds it to cart if doesnt already exist,
    if it does, then remove it from cart
  */
  const selectOrDeselect = (itemId) => {
    if (cart[itemId]) {
      const newObj = {...cart};
      delete newObj[itemId];
      addToCart(newObj);
    } else {
      const newObj = {...cart};
      newObj[itemId] = true;
      addToCart(newObj);
    }
  };

  const handleToggle = (bool) => {
    isShopView(bool)
  };

  useEffect(()=>{
    console.log(categoryList[currentCategoryIndex])

    // if the currentCategoryIndex changes, then filter the Flatlist accordingly
      const newItems = dummy.filter(item=>{
        if (categoryList[currentCategoryIndex] === 'All') {
          return item.category !== categoryList[currentCategoryIndex]
        } else {
          return item.category === categoryList[currentCategoryIndex]
        }
      });
      setCurrentItems(newItems);
  }, [currentCategoryIndex]);

  // convert cart in from object to list of objects
  const convertCartToList = () => {
    let cartList = [];
    for (let i = 0; i < dummy.length; i++) {
      if (cart[dummy[i].id]) {
        cartList.push(dummy[i]);
      }
    }
    return cartList;
  };

    return (
        <View style={styles.main}>
          <View style={styles.previewContainer}>
            <View style={styles.previewLeft}>
              <Text>avatar</Text>
            </View>
            <View style={styles.previewRight}>
              <Text>coins</Text>
              {
                (Object.keys(currentItems).length > 0 && shopView) &&
                  <TouchableOpacity onPress={()=>isCheckout(true)}>
                    <Text>
                      Buy
                    </Text>
                  </TouchableOpacity>
              }
            </View>
          </View>

          {checkout && <CheckoutModal itemList={convertCartToList()} byOutfit={false} checkout={checkout} isCheckout={isCheckout}/>}

          <View style={styles.toggle}>
            <Toggler callback={handleToggle} text1='Shop' text2='Wardrobe'/>
          </View>

          <View style={styles.categories}>
            <Categories setCurrent={setIndex} current={categoryList[currentCategoryIndex]}/>
          </View>

          <View style={styles.grid}>
            <Grid cart={cart} filter={currentFilter} selectOrDeselect={selectOrDeselect} currentItems={currentItems} shopView={shopView}/>
          </View>
        </View>
    )
};

export default AccessoryView;

