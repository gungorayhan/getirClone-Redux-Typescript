import React from 'react'
import {TouchableOpacity,Text,Image,Dimensions,StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import { Category } from '../../models'

type categoryItemProps={
    item:Category
}

const {width,height} = Dimensions.get("window")

const index = ({item}:categoryItemProps) => {
  const navigation=useNavigation()
  return (
   <TouchableOpacity testID="category-item"  onPress={() => navigation.navigate("CategoryDetails",{category:item})}  style={{width:width*0.25,height:width*0.24,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
        <Image style={{width:width*0.18,height:width*0.18,borderRadius:10}} source={{uri:item.src}} />
        <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
  
})

export default index