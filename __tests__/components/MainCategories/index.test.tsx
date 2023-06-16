import React from "react";
import MainCategories from "../../../src/components/MainCategories"
import {render,fireEvent} from "@testing-library/react-native" //fireEvent press işlemine benzer bir işlem yapmamaıza yarar
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

//navigation da tıklama olayını kontorl etmek amacıyla yapılan mock etme işlemi
const mockedNavigate=jest.fn()
jest.mock('@react-navigation/native',()=>{
    const actualNav=jest.requireActual("@react-navigation/native")
    return {
        ...actualNav,
        useNavigation:()=>({
            navigate:mockedNavigate
        })
    }
})

describe("components/MainCategories",()=>{
    test('renders corretly',()=>{
        const {toJSON}= render(<MainCategories/>)
        expect(toJSON()).toMatchSnapshot()
    })

    test("usese useNavigation when pressed",async ()=>{
        const {getAllByTestId} =render(<MainCategories/>)
        const categoryItem=getAllByTestId("category-item")
        await fireEvent.press(categoryItem[0])
        expect(mockedNavigate).toHaveBeenCalledTimes(1) // iligli noktada bir kes basılma işşlemini test ediyoruz
    })

    test("render 18categoryItem is rendered",( )=>{
            const {getAllByTestId}=render(<MainCategories/>)
            const categoryItem=getAllByTestId("category-item")
            expect(categoryItem.length).toBe(18)
    })
})