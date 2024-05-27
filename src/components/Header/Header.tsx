import React from "react";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItemsContainer,
  MenuIconWrapper,
  PhoneNumberText,
  PhoneNumberWrapper,
  SearchIconWrapper,
} from "./Header.styles";
import Image from "next/image";
import { HEADER_ITEMS } from "@/constants";
import SearchIcon from "../../../public/assets/svg/SearchIcon";
import PhoneIcon from "../../../public/assets/svg/PhoneIcon";
import MenuIcon from "../../../public/assets/svg/MenuIcon";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link  href={'/'}  scroll={false} passHref>
    <Image
        alt="XTRABRICK"
        src={"/assets/images/Logo.png"}
        height={49}
        width={87}
        style={{
          cursor: 'pointer',
        }}
      />
  </Link>

      <HeaderItemsContainer gap={'50px'}>
        {HEADER_ITEMS?.map((item) => {
          return (
            <Link href={item.link}  key={item.name} scroll={false} passHref>
              <HeaderItem className={lato.className}>
                {item?.name}
              </HeaderItem>
            </Link>
          );
        })}
      </HeaderItemsContainer>

      <HeaderItemsContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <PhoneNumberWrapper onClick={() => {
          if(window && typeof window !== undefined) {
            window.open(`https://wa.me/9850004775`)
          }
        }}>
          <PhoneIcon />
          <PhoneNumberText className={lato.className}>9850004775</PhoneNumberText>
        </PhoneNumberWrapper>
        <MenuIconWrapper>
          <MenuIcon />
        </MenuIconWrapper>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default Header;
