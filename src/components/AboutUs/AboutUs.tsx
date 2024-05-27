import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { AboutUsContainer, LogoContainer, RightWrapper, AboutUsHeading, XtraBrickRealtors, ExperienceText, AddressText, BackgroundImage } from "./AboutUs.styles";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer id="aboutUs">
      <BackgroundImage>
        <Image
          src="/assets/images/aboutUsBg.png"
          alt="About Us"
          layout="responsive"
          width={1920}
          height={1080}
          loading="eager"
          className="backgroundImage"
        />
      </BackgroundImage>
      <LogoContainer>
        <Image
          alt="XTRABRICK"
          src="/assets/images/Logo.png"
          height={98}
          width={174}
          className="logo"
        />
      </LogoContainer>
      <RightWrapper>
        <div>
          <AboutUsHeading className={lato.className}>About Us</AboutUsHeading>
          <XtraBrickRealtors className={lato.className}>XTRABRICK REALTORS</XtraBrickRealtors>
          <ExperienceText className={lato.className} color="#20B2FF">20 +</ExperienceText>
          <ExperienceText className={lato.className} color="#ffffff" isBold>Years of Experience</ExperienceText>
        </div>
        <AddressText className={lato.className}>
          Office No. 45, Vision One Mall, Bhumkar Chowk, <br />Wakad - 411033,
          Pune, Maharashtra, India
        </AddressText>
      </RightWrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
