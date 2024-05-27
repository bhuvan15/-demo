import { WHO_ARE_WE_DATA } from "@/constants";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { Lato } from "next/font/google";
import { IconTextContainer, DataContainer, ItemContainer, WhoAreWeContainer } from "./WhoAreWe.styles";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const WhoAreWe = () => {
  return (
    <WhoAreWeContainer id={"whoAreWe"}>
      <CustomHeading heading="Who are we?" />

      {WHO_ARE_WE_DATA.map((item, index) => (
        <ItemContainer key={index}>
          <IconTextContainer>
            {<item.icon />}
            <p
              style={{
                marginTop: 5,
                fontFamily: lato.style.fontFamily,
                fontWeight: 400,
                textAlign: "center",
                color: '#454545',
              
              }}
              className={'iconDescription'}
            >
              {item.name}
            </p>
          </IconTextContainer>
          <DataContainer font={lato.style.fontFamily}>
            {item?.data?.map((para, index) => (
              <p
                key={index}
              
              >
                {para}
              </p>
            ))}
          </DataContainer>
        </ItemContainer>
      ))}
    </WhoAreWeContainer>
  );
};

export default WhoAreWe;
