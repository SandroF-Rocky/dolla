import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}></Navbar>

            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services></Services>
            <InfoSection {...homeObjThree} />
            <Footer/>
        </>
    )
}

export default Home
