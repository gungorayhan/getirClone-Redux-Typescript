import React from 'react'
import { ScrollView } from "react-native"
import styles from "./styles"

import HeaderMain from "../../components/HeaderMain"
import BannerCarousel from "../../components/BannerCarousel"
import MaminCategory from "../../components/MainCategories"
const index = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'#f5f5f5'}}>
            <HeaderMain />
            <BannerCarousel />
            <MaminCategory/>
        </ScrollView>
    )
}

export default index