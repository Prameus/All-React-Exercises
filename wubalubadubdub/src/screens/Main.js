import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'

const Main = () => {
    return (
        <View style={{
            flexDirection: 'column',
            borderWidth: 10,
            borderColor: 'black',}} >
            <Text style={style.text}>characters</Text>
            <View style={{
                flexDirection: 'column',
                flex: 1,
                borderWidth: 1,
                borderColor: 'yellow',}}>
            <TouchableOpacity onPress={()=>{}}>
                    <Image resizeMethod={'scale'}
                    style={style.imageLeft}
                    source={require('../images/rick.jpg')}
                />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row-reverse',
                flex: 1,
                borderWidth: 10,
                borderColor: 'brown',
            }}>
            <TouchableOpacity>
                <Image resizeMethod={'scale'}
                    style={style.imageRight}
                    source={require('../images/morty.jpg')}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'blue',
        marginTop: 60,
        marginLeft: 20
    },
    imageLeft: {
        borderWidth: 10,
        borderColor:'red',
        width: "40%",
        height: '65%',
        paddingLeft: 24,
        paddingTop:20
    },
    imageRight: {
        borderWidth: 10,
        borderColor: 'blue',
        width: "40%",
        height: '50%',
        paddingLeft: 24,
        paddingTop: 20,
        borderLeftWidth:100
    },
    touchableView: {
        borderColor: 'red',
        borderWidth:10,
        flexDirection:'row'
    }
})


export { Main }