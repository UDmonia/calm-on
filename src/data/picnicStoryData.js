import React from 'react';
import {Text, Image} from 'react-native';
import styles from '../stylesheets/adventureLocationMadLibStyles';

const stories = [
    {
        id: 0,
        story: <Text>Dear Diary, It was a beautiful day outside.  There were birds chirping and the sun was shining bright. I wanted to go on a picnic with my friends, but they were busy so I went with mom. Dad said he was too busy doing boring grown-up stuff. I took an <Image style={styles.inlineImage} source={require('../../assets/favicon.png')} />, my dog, my egg, and my stuffed giraffe.  When I got there, I sat on my vegetables with mom and saw people drawing astronauts. There was a farm near the park which had pigs, frogs, and lions. After visiting the farm, we started to play various games such as hopscotch. We spent an hour at the swings and then mom said we had to go home.  It was a good day overall. I hope tomorrow will be a good day as well."</Text>,
    }
];

export default stories;