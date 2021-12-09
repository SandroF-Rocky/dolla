import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconsLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">
                                How it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/signin">
                                Careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Investors
                            </FooterLink>
                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>                      
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="/">
                                Contact
                            </FooterLink>
                            <FooterLink to="/">
                                Support
                            </FooterLink>
                            <FooterLink to="/">
                                Careers
                            </FooterLink>
                            <FooterLink to="/">
                                Destinations
                            </FooterLink>
                            <FooterLink to="/">
                                Sponsorships
                            </FooterLink>                      
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">
                                Submit Video
                            </FooterLink>
                            <FooterLink to="/">
                                Ambassadors
                            </FooterLink>
                            <FooterLink to="/">
                                Agency
                            </FooterLink>
                            <FooterLink to="/">
                                Influencer
                            </FooterLink>
                    
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">
                                Instagram
                            </FooterLink>
                            <FooterLink to="/signin">
                                Facebook
                            </FooterLink>
                            <FooterLink to="/signin">
                                Careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Youtube
                            </FooterLink>
                            <FooterLink to="/signin">
                                Twitter
                            </FooterLink>                      
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            dolla
                        </SocialLogo>   
                        <WebsiteRights>
                            dolla &copy; {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
