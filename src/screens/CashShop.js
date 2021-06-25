import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/cashShopStyles.js';
import CheckoutModal from './CheckoutModal.js';
import AccessoryView from './AccessoryView.js';
import Toggler from './Toggler.js';
// get current coach from redux

const dummy = [
    {
        name: 'Painting',
        cost: 10,
        imageSrc: 'source...',
        items: [
            {
                id: 'h1',
                name: 'hat1',
                cost: 5,
                image: require('../../assets/cashShop/auora/auora_PlumeHat.png'),
                icon: require('../../assets/cashShop/auora/icons/icon_PlumeHat.png')
            },
            {
                id: 's1',
                name: 'shirt1',
                cost: 5,
                imageSrc: '...'
            },
            {
                id: 's1',
                name: 'shirt1',
                cost: 5,
                imageSrc: '...'
            },

        ]
    },
    {
        name: 'Painting',
        cost: 10,
        imageSrc: 'source...',
        items: [
            {
                id: 'h1',
                name: 'hat2',
                cost: 4,
                imageSrc: '...'
              },
            {
                id: 's1',
                name: 'shirt1',
                cost: 6,
                imageSrc: '...'
            },
        ]

    },
    {
        name: 'Dancing',
        cost: 10,
        imageSrc: 'source...',
        items: [
            {
                id: 'h1',
                name: 'hat1',
                cost: 5,
                imageSrc: '...'
              },
            {
                id: 's1',
                name: 'shirt1',
                cost: 5,
                imageSrc: '...'
            },
        ]

    },
];

const GridItem = ({handleCheckout, index, name, cost, imageSrc, coach, isCheckout}) => {
    return (
        <TouchableOpacity onPress={()=>handleCheckout(index)} style={styles.gridItem}>
            <View style={styles.image}>
                <Text style={styles.text}>Image here</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.nameContainer}>
                <Text style={[styles.text, styles.name]}>
                    {name}
                </Text>
                <Text style={[styles.text, styles.name]}>
                    {coach}
                </Text>
                </View>
                <Text style={[styles.text, styles.score]}>
                    {cost}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const CashShop =()=>{
    const getCoach = useSelector(state=>state.session.user && state.session.user.coach);

    const [coach,setCoach] = useState(null);
    const [outfitView, changeView] = useState(true);
    const [checkout, isCheckout] = useState(false);
    const [currentOutFit, setCurrentOutfit] = useState(null);

    const renderItems = ({item, index}) => {
        return (
            <GridItem handleCheckout={handleCheckout} index={index} isCheckout={isCheckout} coach = {coach} name={item.name} cost={item.cost} imageSrc={item.imageSrc}/>
        )
    };

    useEffect(()=>{
        if (getCoach) {
            setCoach(getCoach);
        }
    }, [getCoach]);

    const activeStyle = {
        backgroundColor: '#A5DFF0',
        borderRadius: 15
    };

    const handleToggle = (bool) => {
        changeView(bool);
    };

    console.log(checkout);

    const handleCheckout = (index) => {
        setCurrentOutfit(dummy[index]);
        isCheckout(true);
    };

    return(
        <View style={styles.main}>
            <Toggler text1='By Outfit' text2='By Accessory' callback={handleToggle}/>
            {outfitView ?
                <View style={styles.grid}>
                        <FlatList horizontal={false} numColumns={2}keyExtractor={item=>item.name} data={dummy} renderItem={renderItems}/>
                </View>
            :
                <AccessoryView/>
            }

            {/* checkout page */}
            {checkout &&
                <CheckoutModal itemList={currentOutFit.items} byOutfit={true} checkout={checkout} isCheckout={isCheckout} />
            }
        </View>
    )
};

export default CashShop;

