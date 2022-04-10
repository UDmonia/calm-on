import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "../stylesheets/cashShopStyles.js";
import CheckoutModal from "./CheckoutModal.js";
import AccessoryView from "./AccessoryView.js";
import Toggler from "./Toggler.js";
import { fetchUser } from "../actions/cashShop_actions.js";

// dummy data for "By Outfit" view
const dummy = [
  {
    name: "Painting",
    cost: 15,
    imageSrc: "source...",
    items: [
      {
        id: "h1",
        name: "hat1",
        cost: 5,
        image: require("../../assets/cashShop/auora/auora_PlumeHat.png"),
        icon: require("../../assets/cashShop/auora/icons/icon_PlumeHat.png"),
      },
      {
        id: "s1",
        name: "shirt1",
        cost: 5,
        imageSrc: "...",
      },
      {
        id: "s1",
        name: "shirt1",
        cost: 5,
        imageSrc: "...",
      },
    ],
  },
  {
    name: "Painting",
    cost: 10,
    imageSrc: "source...",
    items: [
      {
        id: "h1",
        name: "hat2",
        cost: 4,
        imageSrc: "...",
      },
      {
        id: "s1",
        name: "shirt1",
        cost: 6,
        imageSrc: "...",
      },
    ],
  },
  {
    name: "Dancing",
    cost: 10,
    imageSrc: "source...",
    items: [
      {
        id: "h1",
        name: "hat1",
        cost: 5,
        imageSrc: "...",
      },
      {
        id: "s1",
        name: "shirt1",
        cost: 5,
        imageSrc: "...",
      },
    ],
  },
];

const GridItem = ({
  handleCheckout,
  index,
  name,
  cost,
  imageSrc,
  coach,
  isCheckout,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handleCheckout(index)}
      style={styles.gridItem}
    >
      <View style={styles.image}>
        <Image
          style={{ marginLeft: "15%", marginTop: "10%" }}
          source={require("../../assets/cashShop/auora/icons/auora_set1.png")}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.nameContainer}>
          <Text style={[styles.text, styles.name]}>{name}</Text>
          <Text style={[styles.text, styles.name]}>{coach}</Text>
        </View>
        <View style={styles.costContainer}>
          <Image source={require("../../assets/cashShop/coin_big.png")} />
          <Text style={[styles.text, styles.score]}>{cost}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CashShop = () => {
  const getCoach = useSelector(
    (state) => state.session.user && state.session.user.coach
  );
  const userId = useSelector((state) => state.session.user._id);
  const dispatch = useDispatch();

  const [coach, setCoach] = useState(null);
  const [accessoryView, changeView] = useState(true);
  const [checkout, isCheckout] = useState(false);
  const [currentOutFit, setCurrentOutfit] = useState(null);

  const renderItems = ({ item, index }) => {
    return (
      <GridItem
        handleCheckout={handleCheckout}
        index={index}
        isCheckout={isCheckout}
        coach={coach}
        name={item.name}
        cost={item.cost}
        imageSrc={item.imageSrc}
      />
    );
  };

  // fetch cashshop data from the given user id
  useEffect(() => {
    if (userId != null) {
      dispatch(fetchUser(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (getCoach) {
      setCoach(getCoach);
    }
  }, [getCoach]);

  const activeStyle = {
    backgroundColor: "#A5DFF0",
    borderRadius: 15,
  };

  const handleToggle = (bool) => {
    changeView(bool);
  };

  const handleCheckout = (index) => {
    setCurrentOutfit(dummy[index]);
    isCheckout(true);
  };

  return (
    <View style={styles.main}>
      <Toggler text1="By Accessory" text2="By Outfit" callback={handleToggle} />
      {accessoryView ? (
        <AccessoryView />
      ) : (
        <View>
          {/* Todo(Jack): when we're ready to build this we'll un-comment the FlatList below  */}
          {/* <FlatList horizontal={false} numColumns={2}keyExtractor={item=>item.name} data={dummy} renderItem={renderItems}/> */}
          <Text style={{ fontSize: 24 }}>Coming Soon!</Text>
        </View>
      )}

      {/* checkout page */}
      {checkout && (
        <CheckoutModal
          cost={currentOutFit.cost}
          itemList={currentOutFit.items}
          byOutfit={true}
          checkout={checkout}
          isCheckout={isCheckout}
        />
      )}
    </View>
  );
};

export default CashShop;
