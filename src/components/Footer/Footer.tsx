import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterContainer, ContentWrapper, LinksWrapper, FooterLink, ContactInfoWrapper, LogoImage, ContactItemWrapper, SocialIconsWrapper, CopyrightWrapper, CopyrightText } from "./Footer.styles";
import { Lato } from "next/font/google";
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LinksWrapper>
          {FOOTER_LINKS.map((item, index) => (
            <FooterLink key={index} fontFamily={lato.style.fontFamily}>
              <p className="heading">{item.heading}</p>
              {item.links.map((link, i) => (
                <Link href={link?.link} key={i + index}>
                  <p style={{fontWeight: 400}} className={'link'}>{link.name}</p>
                </Link>
              ))}
            </FooterLink>
          ))}
        </LinksWrapper>

        <ContactInfoWrapper>
          <LogoImage src="/assets/images/Logo.png" alt="XTRABRICK" width={207} height={116} />
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            {CONTACT_INFO.map((item, index) => (
              <ContactItemWrapper key={index} fontFamily={lato.style.fontFamily}>
                <p>{item.heading}</p>
                <div>
                  {item.data.map((info, i) => (
                    <p key={index + i} style={{color: '#DBE9FF'}}>{info}</p>
                  ))}
                </div>
              </ContactItemWrapper>
            ))}
          </div>
          <SocialIconsWrapper>
            {SOCIAL_LINKS.map((item, index) => (
              <div key={index} onClick={() => { if (typeof window !== 'undefined') window.open(item.link) }}>
                <item.icon />
              </div>
            ))}
          </SocialIconsWrapper>
        </ContactInfoWrapper>
      </ContentWrapper>

      <CopyrightWrapper>
        <CopyrightText fontFamily={lato.style.fontFamily}>
          2022 © xtrabrick. All rights reserved by VIGHNAHATRA AND COMPANY
        </CopyrightText>
      </CopyrightWrapper>
    </FooterContainer>
  );
};

export default Footer;
