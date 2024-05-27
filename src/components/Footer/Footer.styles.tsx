import { theme } from "@/constants/basetheme";
import styled from "styled-components";

interface FontProps {
  fontFamily: string;
}

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-top: 55px;

  @media (max-width: 767px) {
    padding-top: 30px; /* Adjust padding-top for mobile */
    margin-top: 30px; /* Adjust margin-top for mobile */
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column; /* Adjust flex-direction for mobile */
    align-items: center; /* Adjust align-items for mobile */
  }
`;

export const LinksWrapper = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FooterLink = styled.div<FontProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  & .heading {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.white};
    margin-bottom: 15px;
    @media (max-width: 767px) {
    font-size: 14px;
  }

  }

  & .link {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #DBE9FF;
    @media (max-width: 767px) {
    font-size: 12px;
  }
  
  }

  p {
    font-family: ${({ fontFamily }) => fontFamily};
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const LogoImage = styled.img`
  margin-top: 10px;
`;

export const ContactItemWrapper = styled.div<FontProps>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 25px;

  p {
    color: ${theme.colors.white};
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
    cursor: pointer;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  div {
    margin-right: 35px;
    margin-top: 0px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  border-top: 1px solid #ffffff;
  justify-content: center;
  @media (max-width: 767px) {
    height: 90px;
  
  }
`;

export const CopyrightText = styled.p<FontProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.5%;
  line-height: 17px;
  color: ${theme.colors.white};
  width: 80%;

  @media (max-width: 767px) {
    font-size: 12px; 
    text-align: center;
  
  }
`;
