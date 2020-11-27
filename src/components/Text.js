import {Text} from 'react-native'
import React from 'react'

const TextInput =(props)=>{
    const type = props.style && props.style.fontWeight? props.style.fontWeight === 'bold'? 'FontBold':'FontReg':null
    const defaultStyle = {fontFamily: type, color: 'black'}
    //const newStyle = Array.isArray(props.style)? props.style: [props.style]
    return <Text style = {[defaultStyle,props.style]}>{props.children}</Text>
}

export default TextInput