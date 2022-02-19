import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-30px" }}>
        {/* GeeksforGeeks: A Computer Science Portal for Geeks */}
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>COMPANY INFO</Heading>
            <FooterLink href="/about">About Navin Creations</FooterLink>
            <FooterLink href="/help">FAQ</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact us</FooterLink>
            <FooterLink href="/buisnessoppurtunities">Buisness Oppurtunities</FooterLink>
          </Column>
          <Column>
            <Heading>SHIPPING & POLICIES</Heading>
            <FooterLink href="/paymentoptions">Payment Options</FooterLink>
            <FooterLink href="/shippingpolicy">Shipping Policy</FooterLink>
            <FooterLink href="/returnspolicy">Return Policy</FooterLink>
            <FooterLink href="/termsofuse">Terms of Use</FooterLink>
            <FooterLink href="/privacypolicy">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>CONTACT US</Heading>
              <FooterLink href="#">Navin Creations , 18/2052</FooterLink>
              <FooterLink href="#">Kochupully Road,Thoppumpady</FooterLink>
              <FooterLink href="#">Kochi-682005,Kerala</FooterLink>
              <FooterLink href="#">Customer Suppport timing:<br/> Mon-sat 9.00 Am to 7.00 Pm</FooterLink>
          </Column>
          <Column>
            <Heading>CONTACT US</Heading>
              <FooterLink href="#">Navin Creations , 18/2052</FooterLink>
              <FooterLink href="#">Kochupully Road,Thoppumpady</FooterLink>
              <FooterLink href="#">Kochi-682005,Kerala</FooterLink>
              <FooterLink href="#">Customer Suppport timing:<br/> Mon-sat 9.00 Am to 7.00 Pm</FooterLink>
          </Column>
        </Row>
      </Container>


      <Container >
        <Row>
          <Column>
            <Heading>PRODUCT CATEGORIES</Heading>
            <FooterLink href="#">Outfit Customization</FooterLink>
            <FooterLink href="#">Littile Kingdom Boys</FooterLink>
            <FooterLink href="#">Littile Kingdom Girls</FooterLink>
          </Column>
          <Column>
            <Heading>PAYMENT METHODS</Heading>
            <FooterLink href="#">Credit cards</FooterLink>
              <FooterLink href="#">Net Banking</FooterLink>
              <FooterLink href="#">ATM & Debit Cards</FooterLink>
          </Column>
          <Column>
          <div>
            <p style={{color:'#878787',letterSpacing:3,borderWidth: 2,textAlign: 'center',padding: 5}}>91-735-631-6538</p>
          </div>
          <p className="mt-30" style={{color:'#878787',fontWeight:'-moz-initial',fontFamily:'cursive',marginTop: "20px"}}>Mail : info@navincreations.com</p>          </Column>
          <Column>
          <div>
            <p style={{color:'#878787',letterSpacing:3,borderWidth: 2,textAlign: 'center',padding: 5}}>91-735-631-6538</p>
          </div>
          <p className="mt-30" style={{color:'#878787',fontWeight:'-moz-initial',fontFamily:'cursive',marginTop: "20px"}}>Mail : info@navincreations.com</p>          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;