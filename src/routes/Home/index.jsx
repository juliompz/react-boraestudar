import React from "react"
import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import SlideBar from "../../components/SlideBar"

export default function Home () {
    return <>
        <Navbar />
        <Banner />
        <SlideBar />
        <Footer />
    </>
}