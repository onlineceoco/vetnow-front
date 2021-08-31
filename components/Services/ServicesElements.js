import styled from "styled-components";


export const ServicesContainer = styled.div`
    height: 900px;
    display: flex;
    font-family: iransans;
    flex-direction: column;
    align-items: center;
    background:  #fff;
    
    
    @media screen and (max-width: 1000px) {
        height: 1000px;
    }
    @media screen and (max-width: 768px) {
        height: 1700px;
    }

    @media screen and (max-width: 480px) {
        height: 1900px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 26px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 
`;

export const ServicesCard = styled.div`
    background: #fff;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        cursor: pointer;    
    }
`;

export const ServicesIcon = styled.img`
    height: 100px;
    justify-content: center;
    width: 100px;
    margin-bottom: 10px;
`;

export const ServicesH1 =styled.h1`
    font-size: 1.5rem;
    color: #000;
    margin-bottom: 64px;
    padding: 30px;


    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    font-weight: bolder;
    text-align: center;
    white-space: nowrap;
    color: #000;

    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 12px;
    font-weight: bolder;
    color: #000;
    text-align: center;

`;