import React from "react"

import {render}  from "@testing-library/react-native"

import HeaderMain from "../../../src/components/HeaderMain"

describe("components/HeaderMain",()=>{
    test("rendersCorrenctly",()=>{
        const {getByTestId,debug}=render(<HeaderMain/>)
        debug() //html çıktısını verecek
    })

    test("renders Correctly 2 ",()=>{
        const {toJSON} = render(<HeaderMain/>)
        
        expect(toJSON()).toMatchSnapshot() // ..snapshots klasörü sonrasında index.test.tsx.snap dosyası oluşturacak. componentldeki son değişimler, buradaki dosya ile karşılaştırılacak.
    })

    test("renders ev test corrently",()=>{
        const {getByTestId,getByText}=render(<HeaderMain/>)

        const ev = getByText('Ev')
        const placeText = getByTestId('place-text')

        expect(placeText).toHaveTextContent('Ev')// id isni aldığımız değerin ev text ine saip mi kontrol ediyoruz

        expect(ev).toBeDefined() //componenetimizde ev text i var mı
    })

    test("renders the corrent right icon ",()=>{
        const {getByTestId,getByText} = render(<HeaderMain/>) 

        const icon = getByTestId('right-icon')
        //console.log(icon.props.style[2].fontFamily).toEqual('entypo') // id sini aldığımız nesnenin props larını consol ekranına yazdırıyoruz. toEqual ilede değerlerin eşitliği kontrol ediliyor
        
        expect(icon.props.style[2].fontFamily).toEqual('entypo') //expect ile işlem yapıyoruz
    })

    test("component with childrens correctly",()=>{
        const {getByTestId} = render(<HeaderMain/>)
        const header= getByTestId('header-main')

        //(header.props.children) children değerleri yazılacak
        expect(header.props.children.lenght).toBe(2)  //children değerlerini uzunluğu istenilen değere eşitmi
        expect(header.props.style.backgroundColor).toEqual("#F7D102")
        
    })
})