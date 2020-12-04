import React from 'react';
import { View, Button, Image, TouchableOpacity } from 'react-native';
import { logout } from '../actions/session_actions.js';
import { useDispatch } from 'react-redux';

const Profile = ({ navigation: { navigate } }) => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logout())
        navigate('Splash');
    }

    return (
        <View>
            <TouchableOpacity onPress={logoutUser}>
                <Image source={require('../../assets/images/logout_btn.png')} />
            </TouchableOpacity>
        </View>
    )
    
}

export default Profile;