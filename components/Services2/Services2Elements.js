import styled from "styled-components";


export const ServicesContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: iransans;
    background:  #fff;

    @media screen and (max-width:1000px){
        height: 1600px;
}
    @media screen and (max-width: 768px) {
        height: 2100px;
    }

    @media screen and (max-width: 480px) {
        height: 2500px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
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
    max-height: 440px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        cursor: pointer;   
        
    }
`;

export const ServicesIcon = styled.img`
    height: 100%;
    justify-content: center;
    width: 100%;
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