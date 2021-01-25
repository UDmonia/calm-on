import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';
import styles from "../stylesheets/decodingMessagesStyles";
import Exit from "../components/Exit";
import { Messages, Images } from "../data/decodingMessagesData";
import kpiData from "../data/kpiData";
import hex from "../stylesheets/hexCodes";

// convert message from data to use
// this is for the top 
// NOTE: the message is going to be displayed at a make of three lines. This is because putting anymore lines will make the image and letter boxes too small
// if there are more than four elements in the data array this will cause issuses and might result in the component not loading
function convertData(data) {
  const message = data;
  const line1 =
    message[0] ? message[0].split('') : null;
  const line2 =
    message[1] ? message[1].split('') : null;
  const line3 = 
    message[2] ? message[2].split('') : null;
  // holds gets all the letters from the message and removes spaces
  const letters = message.join("").replace(/\s/g, '').split("");
  const randomOrderLetters = [...letters].sort(() => Math.random() - 0.5);
  var i;
  // create the letter object that says the letter and if the letter has been found
  for(i = 0; i < letters.length; i++) {
    letters[i] = {
      letter: letters[i],
      found: false,
    }
  }
  // this puts the a index number to the array of the letters that have been put in a random order
  for(i = 0; i < randomOrderLetters.length; i++) {
    randomOrderLetters[i] = {
      letter: randomOrderLetters[i],
      place: i,
    }
  }
  // give each letter in the lines their respective index number in the string
  // this is one here as the index done with the map function resets on every line
  var ptr = 0;
  if(line1) {
    for(i = 0; i < line1.length; i++) {
      if(line1[i] != " ") {
        line1[i] = {
          letter: line1[i],
          place: randomOrderLetters[ptr].place,
        }
        ptr = ptr + 1;
      } else {
        line1[i] = {
          letter: " ",
          place: null,
        }
      }
    }
  }
  if(line2) {
    for(i = 0; i < line2.length; i++) {
      if(line2[i] != " ") {
        line2[i] = {
          letter: line2[i],
          place: randomOrderLetters[ptr].place,
        }
        ptr = ptr + 1;
      } else {
        line2[i] = {
          letter: " ",
          place: null,
        }
      }
    }
  }
  if(line3) {
    for(i = 0; i < line3.length; i++) {
      if(line3[i] != " ") {
        line3[i] = {
          letter: line3[i],
          place: randomOrderLetters[ptr].place,
        }
        ptr = ptr + 1;
      } else {
        line3[i] = {
          letter: " ",
          place: null,
        }
      }
    }
  }
  // split the new randomized array into multiple array's of size 5 in order to be displayed to the user to press
  // find the number of lines needed
  var numOfLines = (letters.length % 5) + 1;
  var displayLetters = new Array(numOfLines);
  var counter = 0;
  var everyFiveCounter = 0;
  var line = [];
  for(i = 0; i < letters.length; i++) {
    if(everyFiveCounter == 5) {
      displayLetters[counter] = line;
      counter = counter + 1;
      line = [];
      everyFiveCounter = 0;
    }
    if(i == letters.length - 1) {
      line.push(
        {
          letter: randomOrderLetters[i].letter,
          display: true,
          position: randomOrderLetters[i].place,
        });
      displayLetters[counter] = line;
      counter = counter + 1;
      line = [];
      everyFiveCounter = 0;
    }
    line.push(
      {
        letter: randomOrderLetters[i].letter,
        display: true,
        position: randomOrderLetters[i].place,
      });
    everyFiveCounter = everyFiveCounter + 1;
  }
  return(
    {
      line1: line1,
      line2: line2,
      line3: line3,
      letters: letters,
      displayLetters: displayLetters,
    }
  );
}


// Letter box for the user to press when trying to guess the letter that is missing from the current spot
function SelectLetterBox(props) {
  return(
    <TouchableOpacity 
      style={[(props.letter.display == true) ? styles.selectLetterBoxBorder : styles.selectLetterBoxBorderHidden]}
      onPress={
        () => props.handlePress(props.letter)
      }>
      <Text style={styles.letter}>{props.letter.letter}</Text>
    </TouchableOpacity>
  );
}
// Letter box for the user to see (Top message )
function LetterBox(props) {
  return(
    <View style={styles.letterBoxContainer}>
        <View style={[(props.letter.place == props.curr) ? styles.letterBoxBorder : styles.letterBox]}>
          {
            props.letter.letter != " " &&
            <Text style={[(props.letters[props.letter.place].found == false) ? styles.hiddenLetter : styles.letter]}>{props.letter.letter}</Text>
          }
        </View>
          { props.letter.letter != " " &&
            <View style={styles.bar} />}
        <View style={styles.image}>
          { props.letter.letter != " " &&
            <Image
              source={props.img[props.letter.letter].img}
              style={styles.img}/>}
        </View>
    </View>
  );
}
// see all modal
function SeeAllModal(props) {
  return(
    <View>
      <Modal
        transparent={true}
        visible={props.visible}
        animationType={"fade"}>
          <View style={styles.modalView}>
            <View style={styles.modalExitButton}>
              <TouchableOpacity
                onPress={() => props.setVisable(false)}>
                <Image source={require('../../assets/exit/blkExitBtn.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.modalPictures}>
              {
                Object.values(props.images).map((image, index) =>                   
                  <View key={index} style={styles.modalPictureBox}>
                    <Image 
                      source={image.img}
                      style={styles.modalImage}/>
                    <Text style={styles.modalText}>{image.word}</Text>
                  </View>)
              }
            </View>
          </View>
      </Modal>
    </View>
  )
}

export default function App({navigation: { navigate }}) {
  
  // handle the button press when the user presses the letter SelectLetterBox component
  function handleLetterPress(letter) {
    if(letter.letter == data.letters[currLetter].letter) {
      // if letter matches the current letter we are looking for then advance the place of currLetter
      if(currLetter == data.letters.length - 1) {
        // handle condition if the activity is over
        setCurrLetter(-1);
        //console.log("done!");
        setFinished(true);
      } else {
        setCurrLetter(currLetter + 1);
      }
      //determine which line that this and update the display letters to remove the correctly guessed letter
      var updated = displayLetters;
      updated[Math.floor(letter.position / 5)][letter.position - (Math.floor(letter.position / 5) * 5)].display = false;
      setDisplayLetters(updated);
      //set the found attribute for the letter 
      var foundLetter = letters;
      foundLetter[currLetter].found = true;
      setLetters(foundLetter);
    }
  }
  // handle the button press when the keyButton component is pressed
  function handleKeyPress() {
    //console.log("key pressed");
    setModalVisable(true);
  }
  // handle finished button press when the user wants to move to the kpi screen
  function handleDoneButtonPress() {
    // route to the kpi screen
    navigate("kpi", {
      bg: require("../../assets/decodingMessages/transparent_background.png"),
      pMsg: kpiData.decoding.primMsg,
      sMsg: kpiData.decoding.secMsg,
    })
  }
  
  // hooks
  const[messageIndex, setMessageIndex] = useState(Math.floor((Math.random() * Messages.messages.length)));
  var data = convertData(Messages.messages[messageIndex].message);
  const [currLetter, setCurrLetter] = useState(0);
  const [letters, setLetters] = useState(data.letters);
  const [displayLetters, setDisplayLetters] = useState(data.displayLetters);
  const [modalVisable, setModalVisable] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <View style={styles.container}>
      <SeeAllModal visible={modalVisable} setVisable={setModalVisable} images={Images}/>
      {
        finished && 
          <View style={styles.finishedContainer}> 
            <Text style={styles.finishedText}>
              Good Job!
            </Text>
            <TouchableOpacity style={styles.finishedButton} onPress={() => handleDoneButtonPress()}>
              <Text style={styles.finishedButtonText}>Done!</Text>
            </TouchableOpacity>
          </View>
      }
      <View style={styles.exitContainer}>
        <View style={styles.exitButton}>
          <Exit navTo={"Modal"}/>
        </View>
      </View>
      <View style={styles.messageContainer}>
          <View style={[styles.verticalCenter, {backgroundColor: hex.blue.blue8, borderRadius: 12.5}]}>
          {/* This is where we map out the message and there is a max of three lines*/}
            {
              data.line1 && 
              <View style={styles.lineContainer}>
                {data.line1.map((letter,index) => 
                  <LetterBox key={index} letter={letter} curr={currLetter} letters={letters} img={Images}/>)}
              </View>
            }
            {
              data.line2 && 
              <View style={styles.lineContainer}>
                {data.line2.map((letter,index) => 
                  <LetterBox key={index} letter={letter} curr={currLetter} letters={letters} img={Images}/>)}
              </View>
            }
            {
              data.line3 && 
              <View style={styles.lineContainer}>
                {data.line3.map((letter,index) => 
                  <LetterBox key={index} letter={letter} curr={currLetter} letters={letters} img={Images}/>)}
              </View>
            }
          </View>
      </View>
      <View style={styles.lettersContainer}>
          <View style={styles.verticalCenter}>
            {
              displayLetters.map((line, index) => 
                <View key={index} style={styles.lineContainer}>
                  {
                    line.map((letter, index) => 
                      <SelectLetterBox key={index} letter={letter} handlePress={handleLetterPress}/>)
                  } 
                  </View>)
            }
          </View>
      </View>
      <View style={styles.keyContainer}> 
        {/* Need to hide this button when the activity is completed and make sure that the button that will eventually be here will pop up. */}
        <TouchableOpacity 
          style={styles.keyButton}
          onPress={
            () => handleKeyPress()
          }>
          <Image 
            source={require('../../assets/decodingMessages/key.png')}
            style={styles.keyImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.auroraContainer}>
          <View style={styles.characterContainer}>
            <Image
              source={require('../../assets/decodingMessages/Aurora.png')}
              style={styles.aurora}/>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>Your goal is to fill in the blanks to uncover a sentence. The black box indicates where you are in the sentence.</Text>
          </View>
      </View>
    </View>
  );
}