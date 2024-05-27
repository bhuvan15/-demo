import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { VisitUsContainer, ContentWrapper, MapImage, TextContent, TextParagraph, AddressParagraph } from "./VisitUs.styles";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const VisitUs = () => {
  return (
    <VisitUsContainer id="visitUs">
      <CustomHeading heading="Come visit us!" />
      <ContentWrapper>
        <MapImage src="/assets/images/companyMap.png" alt="location map" />
        <TextContent>
          <TextParagraph font={lato.style.fontFamily}>
            Xtrabrick offers supportive guidance and assistance to first-time
            buyers throughout the entire homebuying process, from property
            search and financing to closing and beyond, ensuring a smooth and
            stress-free experience.
            <br />
            <br />
            <br />
            Let&apos;s meet!
          </TextParagraph>
      
          <AddressParagraph  font={lato.style.fontFamily}>
            Office No. 45, Vision One Mall, Bhumkar Chowk, <br />
            Wakad - 411033, Pune, Maharashtra, India
          </AddressParagraph>
        </TextContent>
      </ContentWrapper>
    </VisitUsContainer>
  );
};

export default VisitUs;
