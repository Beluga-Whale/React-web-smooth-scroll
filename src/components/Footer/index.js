import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter}  from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinkWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Services</FooterLink>
                            </FooterLinkItems>
                            

                            <FooterLinkItems>
                                <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                            </FooterLinkItems>

                        </FooterLinkWrapper>

                        <FooterLinkWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influence</FooterLink>
                            </FooterLinkItems>
                            

                            <FooterLinkItems>
                                <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItems>

                        </FooterLinkWrapper>
                    </FooterLinksContainer>

                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome} >
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook" >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>

                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer