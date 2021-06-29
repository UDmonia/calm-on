import React, {useState, useEffect} from 'react';
import {FlatList, Modal,View, Text, TouchableOpacity, Image} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/checkoutModalStyles.js';
import RemoveButton from '../components/removeButton.js';

const dummy = [
  {
    id: 'h1',
    name: 'hat1',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 's1',
    name: 'shirt1',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'p1',
    name: 'pants1',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'h1',
    name: 'hat2',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 's2',
    name: 'shirt2',
    cost: 10,
    imageSrc: '...'
  },
  // {
  //   id: 'p2',
  //   name: 'pants2',
  //   cost: 10,
  //   imageSrc: '...'
  // },
  // {
  //   id: 'p3',
  //   name: 'pants3',
  //   cost: 10,
  //   imageSrc: '...'
  // },

]

// itemList should be a unique id for the particular piece of clothing
const CheckoutModal=({checkout,isCheckout, itemList, cost, byOutfit})=>{
  const activeStyle = {
    borderColor: '#678D98',
    borderWidth: 4,
    borderRadius: 10,
    marginTop: '10%'
  };

  const [currentIndex, setIndex] = useState(0);
  const [items, setItems] = useState(itemList);
  const [currentCost, setCost] = useState(cost);
  // useEffect(()=>{
  //   if (currentIndex < 0) {
  //     setIndex(0)
  //   }
  //   if (currentIndex > dummy.length-1) {
  //     setIndex(dummy.length-1);
  //   }
  // }, [currentIndex]);

  const handleRemove = (id) => {
    // remove item at id
    const newItems = [...items];
    newItems.splice(id,1);
    setItems(newItems);
  };

  const handleBuy = () => {
    // submit the list of items through Redux action
      // once the promise returns back sucessfully
      // display a success message
  };

  useEffect(()=>{
    // re-calculate total cost if items change
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
      totalCost += items[i].cost;
    }
    setCost(totalCost);
  }, [items])

    return(
        <Modal animationType='fade' transparent visible={checkout}>
          <View style={styles.main}>
          <TouchableOpacity style={styles.closeButton} onPress={()=>isCheckout(false)}>
          <Image source={require('../../assets/cashShop/exit.png')}/>
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text>
                Avatar here
              </Text>
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
                    <TouchableOpacity key={k} style={[styles.gridItem, activeStyle]}>
                      {!byOutfit &&
                      <View style={styles.delete}>
                        <RemoveButton remove={()=>handleRemove(k)}/>
                      </View>
                      }
                    <View style={styles.gridItemTop}>
                      <Image style={styles.icon} source={item.icon}/>
                    </View>
                    <View style={styles.gridItemBottom}>
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
              Are you want to buy for {currentCost} coins?
            </Text>
          </View>

          <View style={styles.bottom}>
          <TouchableOpacity style={styles.buyButton}>
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

