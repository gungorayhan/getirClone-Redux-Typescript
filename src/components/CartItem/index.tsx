import React from 'react'
import { View, FlatList, Text, ScrollView, Dimensions, Image,TouchableOpacity } from "react-native"
import { Product } from "../../models"
import { useAppDispatch } from '../../utils/storeHook'
import { removeFromCart } from '../../features/cartSlice/cartSlice'



type CartItemProps = {
    product: Product,
    quantity:number
}


const { height, width } = Dimensions.get("window")

function index({ product,quantity }: CartItemProps) {

    const dispatch = useAppDispatch()
    return (
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <View style={{ width: width * 0.92, marginHorizontal: width * 0.04, borderBottomWidth: 0.4, borderBottomColor: 'lightgrey', height: height * 0.13, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: width * 0.04, backgroundColor: "white" }}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <View style={{borderWidth: 0.4, borderColor: 'lightgray', borderRadius: 8,padding:4}}>
                        <Image style={{ height: height * 0.09, width: height * 0.09  }}
                            source={{ uri: product.image }} />
                    </View>
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 13, fontWeight: '600', maxWidth: width * 0.45, }}>{product.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 3, color: '#848897', fontWeight: '600' }}>{product.miktar}</Text>
                        <Text style={{ color: '#5D3EBD', fontWeight: 'bold', marginTop: 6, fontSize: 15 }}>
                            <Text>{"\u20BA"}</Text>{product.fiyat}</Text>
                    </View>
                </View>
                <View style={{ shadowOpacity: 0.4, shadowColor: 'gray', flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", width: width * 0.2, borderColor: 'lightgrey', borderWidth: 0.5, height: height * 0.037, borderRadius: 10 }}>
                    <TouchableOpacity onPress={()=>dispatch(removeFromCart(product))} style={{ flex: 1, alignItems: "center" }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#5D3EBD", height: height * 0.037, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12 }}>{quantity}</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default index