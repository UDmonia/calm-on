import React, {useState, useEffect} from 'react';
import {FlatList, Modal,View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/checkoutModalStyles.js';


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

const ItemList = ({itemList, byOutfit}) => {


  return (
    <View>
    itemList.map(())
    <TouchableOpacity style={[styles.gridItem, activeStyle]}>
      <View style={styles.gridItemTop}>
      </View>
      <View style={styles.gridItemBottom}>
        <Text style={styles.text}>
          {item.cost}
        </Text>
      </View>
    </TouchableOpacity>
    </View>
  )
};

const CheckoutModal=({checkout,isCheckout, itemList, cost, byOutfit})=>{
  const activeStyle = {
    borderColor: '#678D98',
    borderWidth: 4,
    borderRadius: 10,
    marginTop: '10%'
  };

  const [currentIndex, setIndex] = useState(0);

  // useEffect(()=>{
  //   if (currentIndex < 0) {
  //     setIndex(0)
  //   }
  //   if (currentIndex > dummy.length-1) {
  //     setIndex(dummy.length-1);
  //   }
  // }, [currentIndex]);

  console.log(currentIndex)

    return(
        <Modal animationType='fade' transparent visible={checkout}>
          <View style={styles.main}>
          <TouchableOpacity style={styles.closeButton} onPress={()=>isCheckout(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text>
                Avatar here
              </Text>
            </View>
            <View style={styles.itemList}>
            <TouchableOpacity onPress={()=>currentIndex > 0 && setIndex(currentIndex=>currentIndex-1)}>
              <Text>PREV</Text>
            </TouchableOpacity>

              {
                dummy.slice(currentIndex, currentIndex+4).map((item,k)=>{
                  return (
                    <TouchableOpacity key={k} style={[styles.gridItem, activeStyle]}>
                    <View style={styles.gridItemTop}>
                      <Text>
                        {item.name}
                      </Text>
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
                <TouchableOpacity onPress={()=>currentIndex+4 <= dummy.length-1 && setIndex(currentIndex=> currentIndex+1)}>
              <Text>NEXT</Text>
            </TouchableOpacity>

            </View>

          </View>
          <View style={styles.message}>
            <Text style={styles.text}>
              Are you want to buy for {cost} coins?
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

