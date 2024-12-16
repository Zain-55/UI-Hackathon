import Image from "next/image";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Range from "./components/Range";
import Ourproduct from "./components/Ourproduct";
import Rooms from "./components/Rooms";
import Funiturestyle from "./components/Funiturestyle";
import Footer from "./components/Footer";



export default function Home() {
  return (
  <div>
    <Header/>
    <Herosection/>
    <Range/>
    <Ourproduct/>
    <Rooms/>
    <Funiturestyle/>
    <Footer/>
  

  </div>
  );
}