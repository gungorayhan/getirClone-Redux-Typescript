import React from "react";

import BannerCarousel from "../../../src/components/BannerCarousel"

import {render} from "@testing-library/react-native"

describe("component/BannerCarousel",()=>{
    test('renders corrently',()=>{
        const {toJSON} = render(<BannerCarousel/>)

        expect(toJSON()).toMatchSnapshot() // snapshot klasör ve dosya yapılanması oluşturacak
    })

    test("renders children number correctyl",()=>{
        const {getByTestId} = render(<BannerCarousel/>)
        const banner = getByTestId('banner-carousel')

        expect(banner.props.data.lenght).toBe(4)
    })

    test("renders props types correctly",()=>{
        const {getByTestId} = render(<BannerCarousel/>)
        const banner = getByTestId('banner-carousel')
        expect(banner.props.decelerationRate).toBe(4)
    })

    test("render cdn images in banner caraousel"),()=>{
        const {getByTestId} = render(<BannerCarousel/>)
        const banner = getByTestId('banner-carousel')

        console.log(banner.props) // diyerek aslında tüm propslara bakabilir ve hangisinide kontrol sağlamak istiyorsam nasıl bir yol ile ulaşacağımı belirleyeblirim

        const bannerCarouselItems = banner.props.data // tüm datalarına bakalım

        bannerCarouselItems.map((item,index)=>{
            const cdnElement = item // herbir ıtem ı tek tek gzeiyoruz ve kontrol sağlıyoruz

            expect(cdnElement.substring(0,11).toLowerCase).toEqual("https://cdn") // gelen datanın veri karşılaştırması ypılıyor.string verinin belirli bir bölümü substring ile kesiio alıyor ve toEqual ile karşılaştırma işlemi yapıyorusz
        })
    }
})