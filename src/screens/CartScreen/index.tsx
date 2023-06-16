import React, { useState, useEffect } from 'react'
import {useAppDispatch,useAppSelector} from "../../utils/storeHook"
import { View, Text, FlatList, Image,ScrollView, Dimensions, TouchableOpacity } from "react-native"
import productGetir from '../../../assets/productGetir'
import CartItem from "../../components/CartItem"
import ProductItem from "../../components/ProductItem"
import { ICartItem } from '../../features/cartSlice/cartSlice'
import {addToCart} from "../../features/cartSlice/cartSlice"
const { height, width } = Dimensions.get("window")

function index() {

  const [totalPrice,setTotalPrice] = useState<number>(0)
  const dispatch=useAppDispatch();
  const cartItem=useAppSelector((state)=>state.cart.carts)

  const getProductPrice=()=>{
    let total=0;
    cartItem.forEach((item)=>{
      total+=item.cart.fiyat
      setTotalPrice(total)
    })
  }


  useEffect(()=>{
    getProductPrice()
  },[cartItem])

   

  return (
    <View style={{flex:1}}>
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        data={cartItem}
        renderItem={({ item }) => <CartItem product={item.cart} quantity={item.quantity} />}
      />
      <Text style={{padding:15,fontWeight:'bold',color:'##5d3ebd'}}>Önerilen Ürünler</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor:'white'}}
      >
      {
        productGetir.map((item,index)=>(
          <ProductItem key={index} item={item}/>
        ))
      }
      </ScrollView>
    </ScrollView>
    <View style={{
        height: height * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        backgroundColor: '#f8f8f8',
        position:'absolute',
        bottom:0,
        width:'100%'

      }}>
        <TouchableOpacity style={{
          height: height * 0.06,
          flex: 3,
          backgroundColor: '#5D3EBD',
          justifyContent:'center',
          alignItems:'center',
          marginTop:-10,
          borderTopLeftRadius:8,
          borderBottomLeftRadius:8
        }}>
          <Text style={{color:'white',fontWeight:'600'}}>Devam</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, 
          backgroundColor:'white',
          alignItems:'center',
          justifyContent:'center',
          marginTop:-10,
          height:height*0.06,
          borderTopLeftRadius:8,
          borderBottomLeftRadius:8
        }}>
         
          <Text style={{color:"#5D3EBD",fontWeight:'bold',fontSize:16}}>{totalPrice.toFixed(2)}<Text>{"\u20BA"}</Text></Text>
        </View>
      </View>
    </View>

  )
}

export default index