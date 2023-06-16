import React from 'react'
import { View, Text, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")
type DetailBoxProps = {
    price: number,
    name: string,
    quantity: string
}
function index({ price, name, quantity }: DetailBoxProps) {
    return (
        <View style={{ width: '100%', backgroundColor: 'white', alignItems: 'center' }}>
            <Text style={{color:'#5D3EBD',fontSize:20,fontWeight:'bold',marginTop:12}}>
                <Text>{"\u20BA"}</Text>
                {price}
            </Text>
            <Text style={{fontWeight:'600',fontSize:16,marginTop:10}}>
                {name}
            </Text>
            <Text style={{color:'#84B897',fontWeight:'600',marginTop:8,paddingBottom:14}}>
                {quantity}
            </Text>
        </View>
    )
}

export default index