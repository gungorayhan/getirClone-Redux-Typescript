import React,{useState} from 'react'
import styles from './styles'
import { ScrollView,Text } from 'react-native'
import { Category } from '../../models'
import CategoryFiltering from "../../components/CategoryFiltering"
import TypeFiltering from "../../components/TypeFiltering"
import ProductsContainer from "../../components/ProductsContainer"
  
const index = (props:any) => {
  const [category,setCategory]=useState<Category>(props.route.params.category)
  return (
    <ScrollView>
        <CategoryFiltering category={category}/>
        <TypeFiltering/>
        <ProductsContainer/>
    </ScrollView>
  )
}

export default index