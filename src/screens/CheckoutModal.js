import React, {useState, useEffect} from 'react';
import {FlatList, Modal,View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import styles from '../stylesheets/checkoutModalStyles.js';
import RemoveButton from '../components/removeButton.js';
import { checkoutCart } from '../actions/cashShop_actions.js';

const initialCartState = {Hat: false, Glasses: false, Earrings: false, Mask: false,
  Top: false, Bottom: false, Shoes: false, Extra: false, Set: false, Background: false, Pet: false};
  

// itemList should be a unique id for the particular piece of clothing
const CheckoutModal=({checkout,isCheckout, itemList, cost, byOutfit, emptyCart})=>{
  const dispatch = useDispatch();

  const [currentIndex, setIndex] = useState(0);
  const [items, setItems] = useState(itemList);
  const [currentCost, setCost] = useState(cost);
  const [currentCoins, setCoins] = useState(null);

  const handleRemove = (id) => {
    // remove item at id
    const newItems = [...items];
    newItems.splice(id,1);
    setItems(newItems);
  };

  const handleBuy = () => {
    // also has to check if the user has enough money before checking out
    if (currentCost > 0) {
      dispatch(checkoutCart({outfitList: items, total: currentCost}))
        .then((status)=>{
          if (status === 'success') {
            // empty out cart
            emptyCart(initialCartState)
            // leave modal
            isCheckout(false)
          }
        })
    }
  };

  useEffect(()=>{
    // re-calculate total cost if items change
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
      totalCost += items[i].cost;
    }
    setCost(totalCost);
  }, [items]);


  const putOnClothes = (itemList) => {
    let outfitList = [];
    for (let i = 0; i < itemList.length; i++) {
        outfitList.push(
          <Image key={i} resizeMode='contain' style={styles.avatar} source={itemList[i].image}/>
          );
    }
    return outfitList;
  }

    return(
        <Modal animationType='fade' transparent visible={checkout}>
          <View style={styles.main}>
          <TouchableOpacity style={styles.closeButton} onPress={()=>isCheckout(false)}>
          <Image source={require('../../assets/cashShop/exit.png')}/>
          </TouchableOpacity>
          <View style={styles.middle}>

            <View style={styles.avatarContainer}>
              <Image resizeMode='contain' style={styles.avatar} source={require('../../assets/cashShop/auora/auora_base.png')}/>
              {putOnClothes(items)}
            </View>
            <View style={styles.itemList}>
            <TouchableOpacity style={styles.buttons} onPress={()=>currentIndex > 0 && setIndex(currentIndex=>currentIndex-1)}>
              <Image source={require('../../assets/cashShop/prev.png')}/>
            </TouchableOpacity>
              <View>
              {
                items.slice(currentIndex, currentIndex+4).map((item,k)=>{
                  return (
                    // items for check out, deletable if its picked from accessory view, and not deletable if byOutfit is true
                    <TouchableOpacity key={k} style={styles.gridItem}>
                      {!byOutfit &&
                      <View style={styles.delete}>
                        <RemoveButton remove={()=>handleRemove(k)}/>
                      </View>
                      }
                    <View style={styles.gridItemTop}>
                      <Image style={styles.icon} source={item.icon}/>
                    </View>
                    <View style={styles.gridItemBottom}>
                      <Image style={styles.coin} source={require('../../assets/cashShop/coin.png')}/>
                      <Text style={styles.text}>
                        {item.cost}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  )
                })
              }
              </View>
                <TouchableOpacity style={styles.buttons} onPress={()=>currentIndex+4 <= items.length-1 && setIndex(currentIndex=> currentIndex+1)}>
                <Image source={require('../../assets/cashShop/next.png')}/>
            </TouchableOpacity>

            </View>

          </View>
          <View style={styles.message}>
            <Text style={styles.text}>
              Are you want to buy for <Text style={{fontWeight: 'bold'}}>{currentCost} coins</Text>?
            </Text>
          </View>

          <View style={styles.bottom}>
          <TouchableOpacity onPress={handleBuy} style={styles.buyButton}>
            <Text style={styles.text}>
              Buy
            </Text>
          </TouchableOpacity>
          </View>
          </View>

        </Modal>
    )
};

export default CheckoutModal;

