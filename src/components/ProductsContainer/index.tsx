import React from 'react'
import {ScrollView,View,Text,Image,Dimensions} from "react-native"
import ProductItem from "../../components/ProductItem"
import productGetir from '../../../assets/productGetir'

const {width,height} = Dimensions.get("window")
const index = () => {
  return (
    <View>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
         {
            productGetir.slice(0,2).map((item)=>{
                return (
                    <ProductItem key={item.id} item={item}/>
                )
            })
         }
        </View>
        <Text style={{color:'gray',fontWeight:'bold',padding:14}}>Çubuk</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',flex:1,backgroundColor:'white',paddingVertical:10}}>
            {
                productGetir.slice(2).map((item)=>{
                    return (
                        <ProductItem key={item.id} item={item} />
                    )
                })
            }
        </View>
    </View>
  )
}

export default index