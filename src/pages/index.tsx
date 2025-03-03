import Head from "next/head";
import Header from "@/components/Header/Header";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import OurClients from "@/components/OurClients/OurClients";
import PropertyCategories from "@/components/PropertyCategories/PropertyCategories";
import Locations from "@/components/Locations/Locations";
import AboutUs from "@/components/AboutUs/AboutUs";
import WhatIsXtraBrick from "@/components/WhatIsXtraBrick/WhatIsXtraBrick";
import WhoAreWe from "@/components/WhoAreWe/WhoAreWe";
import OurTeam from "@/components/OurTeam/OurTeam";
import VisitUs from "@/components/VisitUs/VisitUs";
import Testimonials from "@/components/Testimonials/Testimonial";
import Footer from "@/components/Footer/Footer";
import { PROMOTIONAL_BANNER_ITEMS } from "@/constants";



const Home = () => {
  return (
    <div style={{flex: 1}}>
      <Head>
        <title>XTRABRICK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <PromotionalBanner data={PROMOTIONAL_BANNER_ITEMS}/>
        <OurClients />
        <PropertyCategories />
        <Locations />
        <AboutUs />
        <WhatIsXtraBrick />
        <WhoAreWe />
        <OurTeam />
        <Testimonials />
        <VisitUs />
        <Footer />
      </div>

     
    </div>
  );
}


export default Home