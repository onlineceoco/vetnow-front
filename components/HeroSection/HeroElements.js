import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';


export const HeroContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    font-family: iransans;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    @media screen and (max-width: 768px) {
        height: 650px;
    }
    @media screen and (max-width: 480px) {
        height: 650px;
    }
    
`;

export const HeroBg =styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
    margin: 0;

    
`;
export const HeroContent=styled.div`
    
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1=styled.h1`
    color: #fff;
    font-size: 43px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 38px;}
    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`
export const HeroP=styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



