import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "../stylesheets/decodingMessagesStyles";
import Exit from "../components/Exit";

// convert message from data to use
// this is for the top 
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
  var i;
  for(i = 0; i < letters.length; i++) {
    letters[i] = {
      letter: letters[i],
      place: i,
    }
  }
  // give each letter in the lines their respective index number in the string
  // this is one here as the index done with the map function resets on every line
  var ptr = 0;
  for(i = 0; i < line1.length; i++) {
    if(line1[i] != " ") {
      line1[i] = {
        letter: line1[i],
        place: letters[ptr].place,
      }
      ptr = ptr + 1;
    } else {
      line1[i] = {
        letter: " ",
        place: null,
      }
    }
  }
  for(i = 0; i < line2.length; i++) {
    if(line2[i] != " ") {
      line2[i] = {
        letter: line2[i],
        place: letters[ptr].place,
      }
      ptr = ptr + 1;
    } else {
      line2[i] = {
        letter: " ",
        place: null,
      }
    }
  }
  for(i = 0; i < line3.length; i++) {
    if(line3[i] != " ") {
      line3[i] = {
        letter: line3[i],
        place: letters[ptr].place,
      }
      ptr = ptr + 1;
    } else {
      line3[i] = {
        letter: " ",
        place: null,
      }
    }
  }
  // will eventually randomize the contents
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
      line.push(letters[i].letter);
      displayLetters[counter] = line;
      counter = counter + 1;
      line = [];
      everyFiveCounter = 0;
    }
    line.push(letters[i].letter);
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


// Letter box for the user to press
function SelectLetterBox(props) {
  return(
    <TouchableOpacity 
      style={styles.test1}
      onPress={
        () => props.handlePress(props.letter)
      }>
      <Text style={styles.letter}>{props.letter}</Text>
    </TouchableOpacity>
  );
}
// Letter box for the user to see (Top message )
function LetterBox(props) {
  return(
    <View style={styles.letterBoxContainer}>
        <View style={[(props.index == props.curr) ? styles.letterBoxBorder : styles.letterBox]}>
          <Text style={styles.letter}>{props.letter}</Text>
        </View>
          { props.letter != " " &&
            <View style={styles.bar} />}
        <View style={styles.image}>
          { props.letter != " " &&
            <Image
              source={require("../../assets/adventure/locations/alphabetItems/fruits.png")}
              style={styles.img}/>}
        </View>
    </View>
  );
}

export default function App() {
  
  function handleLetterPress(letter) {
    console.log("letter pressed " + letter)
  }
  function handleKeyPress() {
    console.log("key pressed");
    if(currLetter == data.letters.length - 1) {
      setCurrLetter(0);
    } else {
      setCurrLetter(currLetter + 1);
    }
  }

  // collect and configure the data when the screen is first rendered
  var data = convertData(["FOCUS", "ON THE", "POSITIVE"]);
  // hooks
  // holds the position of the current letter the user is looking for
  const [currLetter, setCurrLetter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.exitContainer}>
        <Exit/>
      </View>
      <View style={styles.messageContainer}>
          <View style={[styles.verticalCenter, {backgroundColor: "lightblue", borderRadius: 12.5}]}>
            {
              data.line1 && 
              <View style={styles.lineContainer}>
                {data.line1.map((letter,index) => <LetterBox key={index} index={letter.place} letter={letter.letter} curr={currLetter}/>)}
              </View>
            }
            {
              data.line2 && 
              <View style={styles.lineContainer}>
                {data.line2.map((letter,index) => <LetterBox key={index} index={letter.place} letter={letter.letter} curr={currLetter}/>)}
              </View>
            }
            {
              data.line3 && 
              <View style={styles.lineContainer}>
                {data.line3.map((letter,index) => <LetterBox key={index} index={letter.place} letter={letter.letter} curr={currLetter}/>)}
              </View>
            }
          </View>
      </View>
      <View style={styles.lettersContainer}>
          <View style={styles.verticalCenter}>
            {
              data.displayLetters.map((line, index) => 
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
        <TouchableOpacity 
          style={styles.keyButton}
          onPress={
            () => handleKeyPress()
          }>
        </TouchableOpacity>
      </View>
      <View style={styles.auroraContainer}>

      </View>
    </View>
  );
}