import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/cashShopStyles.js';
import CheckoutModal from './CheckoutModal.js';
import AccessoryView from './AccessoryView.js';
import Toggler from './Toggler.js';
// get current coach from redux

const GridItem = ({name,cost,imageSrc, coach, isCheckout}) => {
    return (
        <TouchableOpacity onPress={()=>isCheckout(true)} style={styles.gridItem}>
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

const dummy = [
    {
        name: 'Painting',
        cost: 10,
        imageSrc: 'source...'
    },
    {
        name: 'Painting',
        cost: 10,
        imageSrc: 'source...'
    },
    {
        name: 'Dancing',
        cost: 10,
        imageSrc: 'source...'
    },
    {
        name: 'Running',
        cost: 10,
        imageSrc: 'source...'
    },


];

const CashShop =()=>{
    const getCoach = useSelector(state=>state.session.user && state.session.user.coach);

    const [coach,setCoach] = useState(null);
    const [outfitView, changeView] = useState(true);
    const [checkout, isCheckout] = useState(false);

    const renderItems = ({item}) => {
        return (
            <GridItem isCheckout={isCheckout} coach = {coach} name={item.name} cost={item.cost} imageSrc={item.imageSrc}/>
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

    console.log(checkout)

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
                <CheckoutModal checkout={checkout} isCheckout={isCheckout}/>
            }
        </View>
    )
};

export default CashShop;

