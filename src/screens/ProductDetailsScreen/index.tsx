import React, { useState, useEffect } from 'react'
import style from './style'
import { Product } from "../../models"

import { View, Text, ScrollView, Image, FlatList, Dimensions, ActivityIndicator } from "react-native"

import ImageCoursel from "../../components/ImageCoursel"
import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CardButton from "../../components/CardButton"

const index = (props:any) => {
  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)
  }, [])
  if (!product) {
    return <ActivityIndicator color={'#5D3EBD'} />
  }
  return (
    <View style={{flex:1}}>
      <ScrollView  style={{flex:1,backgroundColor:'#f5f5f5'}}>
        <ImageCoursel images={product.images} />
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
        <Text style={{ paddingHorizontal: 10, paddingVertical: 13, color: '#808B99', fontWeight: '600',fontSize:14 }}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>


  )
}

export default index