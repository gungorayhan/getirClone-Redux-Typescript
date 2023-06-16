import React,{useState} from 'react'
import {View,Text,ScrollView,Dimensions,TouchableOpacity} from "react-native"


const {height,width}=Dimensions.get('window')

const TypeBox=({setCat,item,active}:{setCat:any,item:string,active:string})=>{
    return(
        <TouchableOpacity onPress={()=>setCat(item)} style={[{flexDirection:"row",alignItems:'center',paddingHorizontal:10,marginRight:12,borderRadius:10,height:height*0.044},item==active?{backgroundColor:"#5C3EBC"}:{borderColor:'#F0EFF3',borderWidth:1}]}>
            <Text style={[{fontSize:12,color:'#7849F7',fontWeight:'bold'},item==active && {color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}

function index() {

    const [category,setCategory]=useState<string>("Birlikte İyi Gider")

  return (
    <ScrollView style={{width:'100%',height:height*0.072,borderBottomColor:'lightgrey',borderBottomWidth:1,flexDirection:'row',backgroundColor:'white',paddingVertical:height*0.014,paddingHorizontal:12}}
        showsHorizontalScrollIndicator={false} bounces={true} 
        horizontal
    >
        {
            ["Birlikte İyi Gider", "Çubuk", "Kutu","Külah","Çoklu","Bar"].map((item)=>(
                <TypeBox setCat={setCategory} item={item} active={category} />
            ))
        }
    </ScrollView>
  )
}

export default index