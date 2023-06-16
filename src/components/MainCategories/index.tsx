import React,{useState} from 'react'
import {View,Text,StyleSheet} from "react-native"

import CategoryItem from "../CategoryItem"
import categoriesGetir from '../../../assets/categoriesGetir'
import {Category} from "../../models"
const index = () => {
    const [categories,setCategories]=useState<Category[]>(categoriesGetir)
  return (
    <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listContainer}>
            {
                categories.map((item)=>(
                    <CategoryItem  key={item.id} item={item}/>
                ))
            }
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    listContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap'
    }
})

export default index 