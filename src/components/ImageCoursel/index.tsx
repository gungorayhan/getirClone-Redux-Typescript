import React,{useState,useEffect,useRef} from 'react'
import { View, Text, FlatList, Image, Dimensions,StyleSheet} from "react-native"
import { Product } from '../../models'

const { height, width } = Dimensions.get("window")

function index({ images }: { images: string[] }) {
const [activeIndex,setActiveIndex]=useState()
const onViewRef=useRef((viewableItems)=>{
    if(viewableItems.viewableItems.length>0){
        setActiveIndex(viewableItems.viewableItems[0].index || 0)
        // console.log(viewableItems)
    }
})

const viewConfigRef=useRef({viewAreaCoveragePercentThreshold: 50})
    return (
        <View style={{backgroundColor:"white",alignItems:"center",width:"100%",height:height*0.25,paddingTop:15}}>
            <FlatList
                data={images}
                style={{ width: width * 0.5, height: height * 0.18 }}
                renderItem={(item) => (
                    <Image
                        source={{ uri: item.item }}
                        style={{ width: width * 0.5, height: height * 0.21,resizeMode:"stretch" }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width*0.5}
                snapToAlignment={'center'}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            ></FlatList>
            <View style={{flexDirection:"row",alignItems:'center',width:30,height:12,justifyContent:'space-around'}}>
                {
                    images.map((image,index)=>(
                        <View key={index} style={[style.dot,{backgroundColor:activeIndex==index?'#5D3EBD':'#F2F0FD'}]}/>
                    ))
                }
            </View>
        </View>



    )
}

const style=StyleSheet.create({
dot:{
width:8,
height:8,
borderRadius:20
}

})




export default index