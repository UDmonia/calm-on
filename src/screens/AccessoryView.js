import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/AccessoryViewStyles.js';
import Toggler from './Toggler.js';

const categoryList = ['All','Face','Top','Bottom','Shoes','Extra'];

const dummy = [
  {
    id: 'h1',
    name: 'hat',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 's1',
    name: 'shirt',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'p1',
    name: 'pants',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'j1',
    name: 'jacket',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'sh1',
    name: 'shorts',
    cost: 10,
    imageSrc: '...'
  },
  {
    id: 'g1',
    name: 'glasses',
    cost: 10,
    imageSrc: '...'
  },
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

const Grid = ({shopView, currentItems, selectOrDeselect}) => {

  const activeStyle = {
    borderColor: '#678D98',
    borderWidth: 4,
    borderRadius: 10
  };

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>selectOrDeselect(item.id)} style={[styles.gridItem, currentItems[item.id] && activeStyle]}>
        <View style={styles.gridItemTop}>
        </View>
        <View style={styles.gridItemBottom}>
          <Text style={styles.text}>
            {item.cost}
          </Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View>
      <FlatList horizontal={false} numColumns={4} renderItem={renderItems} data={dummy}/>
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
  const [currentCategoryIndex, setIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState({});


  // if selected is in set, delete it,
  // if not in set, add it to set
    // when in set, change the style

  const selectOrDeselect = (itemId) => {
    if (currentItems[itemId]) {
      const newObj = {...currentItems};
      delete newObj[itemId];
      setCurrentItems(newObj);
    } else {
      const newObj = {...currentItems};
      newObj[itemId] = true;
      setCurrentItems(newObj);
    }
  };

  const handleToggle = (bool) => {
    isShopView(bool)
  };

    return(
        <View style={styles.main}>
          <View style={styles.previewContainer}>
            <Text>preview</Text>
          </View>

          <View style={styles.toggle}>
            <Toggler callback={handleToggle} text1='Shop' text2='Wardrobe'/>
          </View>

          <View style={styles.categories}>
            <Categories setCurrent={setIndex} current={categoryList[currentCategoryIndex]}/>
          </View>

          <View style={styles.grid}>
            <Grid selectOrDeselect={selectOrDeselect} currentItems={currentItems} shopView={shopView}/>
          </View>
        </View>
    )
};

export default AccessoryView;

