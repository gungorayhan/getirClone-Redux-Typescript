import React,{useEffect,useState} from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen"
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import CartScreen from "../screens/CartScreen"
import {Image,Text,TouchableOpacity,Dimensions,View} from "react-native"

import {Ionicons,Foundation} from "@expo/vector-icons"
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { useAppDispatch,useAppSelector } from '../utils/storeHook'
import { ICartItem } from '../features/cartSlice/cartSlice'
import { Product } from '../models'
import { clearCart } from '../features/cartSlice/cartSlice'
const {width,height}=Dimensions.get("window")

const Stack = createStackNavigator()

const MyStack = ({navigation,route,cartItem}:{cartItem:ICartItem[]}) => {
    const dispatch=useAppDispatch()
    const tabHiddenRoutes=["ProductDetails","CartScreen"]

    useEffect(()=>{
        const routeName=getFocusedRouteNameFromRoute(route) as string
        if(tabHiddenRoutes.includes(routeName)){
            navigation.setOptions({ tabBarStyle:{display:'none'}})
        }else{
            navigation.setOptions({tabBarStyle:{display:'flex'}});
        }
    },[navigation,route])

    const [totalPrice,setTotalPrice] = useState<number>(0)

    const getProductPrice=()=>{
    var total =0;
    cartItem.forEach((cartItem) => {
        const price =(total+=cartItem.cart.fiyat)
        
       setTotalPrice(price)
    });
    }
    useEffect(()=>{
        getProductPrice()
    },[cartItem,navigation])
    

  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerStyle:{backgroundColor:"#5C3EBC"},
                headerTitle:()=>(
                    <Image source={require("../../assets/getirlogo.png")}
                    style={{width:70,height:30}}
                    />

                )
            }}
        />
        <Stack.Screen
            name='CategoryDetails'
            component={CategoryFilterScreen}
            options={{
                headerTintColor:'white',
                headerBackTitleVisible:false,
                headerStyle:{backgroundColor:"#5C3EBC"},
                headerTitle:()=>(
                   <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>
                    Ürünler
                   </Text>
                ),
                headerRight:()=>(
                    <TouchableOpacity onPress={()=>navigation.navigate("CartScreen")} style={{width:width*0.22,height:33,backgroundColor:'white',marginRight:width*0.03,borderRadius:9,
                    flexDirection:'row',alignItems:"center",
                    }}>
                        <Image style={{width:23,height:23,marginLeft:6}} source={require("../../assets/cart.png")}/>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:'#F3EFFE',height:33,borderBottomRightRadius:9,borderTopRightRadius:9}}>
                            <Text style={{color:'#5D3EBD',fontWeight:'bold',fontSize:12}}>
                                <Text>{"\u20BA"}</Text>{totalPrice.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        <Stack.Screen
            name='ProductDetails'
            component={ProductDetailsScreen}
            options={{
                headerBackTitleVisible:false,
                headerTintColor:'white',
                headerLeft:()=>(
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingLeft:12}}>
                        <Ionicons name="close" size={24} color='white'/>
                    </TouchableOpacity>
                ),
                headerStyle:{backgroundColor:'#5C3EBC'},
                headerTitle:()=>(
                    <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Ürün Detayı</Text>
                ),
                headerRight:()=>(
                    <TouchableOpacity  style={{paddingRight:12}}>
                        <Foundation name="heart" size={24} color="#32177A"/>
                    </TouchableOpacity>
                )
            }}
        />
        <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
            headerTintColor:'white',
            headerBackTitleVisible:false,
            headerStyle:{backgroundColor:'#5C3EBC'},
            headerTitle:()=>(
                <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>Sepetim</Text>
            ),
            headerLeft:()=>(
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingLeft:10}}>
                    <Ionicons name="close" size={24} color='white'/>
                </TouchableOpacity>
            ),
            headerRight:()=>(
                <TouchableOpacity onPress={()=>dispatch(clearCart())} style={{paddingLeft:10}}>
                    <Ionicons name="trash" size={24} color='white'/>
                </TouchableOpacity>
            )
        }}
        />
    </Stack.Navigator>
  )
}

export default function HomeNavigator({navigation,route}:any){
    const cartItem:ICartItem[]=useAppSelector((state)=>state.cart.carts)
    return <MyStack navigation={navigation} route={route} cartItem={cartItem}/>
}