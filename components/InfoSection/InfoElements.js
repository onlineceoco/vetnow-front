import styled from 'styled-components';

export const InfoContainer = styled.div`
    direction: rtl;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#232f3e ')};
    z-index: 1;
    font-family: iransans;
    max-width: 100%;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
        
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
   
    height: 800px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    
    
`;

export const InfoRow =styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    padding: 40px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        margin-right: 15px;
    }
`;


export const Column1 = styled.div`
    grid-area: col1;
    max-width: 100%;
    
`;

export const Column2 = styled.div`
    grid-area: col2;
    max-width: 100%;
    
`;

export const TextWrapper = styled.div`
    max-width: max-content;
    padding-top: 0;
    text-align: center;
    white-space: nowrap;
    padding-bottom: 60px;
    
`;

export const TopLine = styled.p`
    color: #ff9900;
    white-space: nowrap;
    text-align: center;
    font-size: 26px;
    line-height: 70px;
    font-weight: 900;
    

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const Heading = styled.h1`
    padding-top: 20px;
    white-space: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#fff' : '#010606')};

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;


    }

    @media screen and (max-width:480px) {
        font-size: 12px;
        margin-left: 20px;
        margin-right: 20px;
        
        

    }
`;

export const Subtitle = styled.p`
    max-width: 550px;
    text-align: justify;
    margin: 50px;
    white-space: normal;
    font-size: 14px;
    line-height: 30px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    padding-bottom: 20px;
    padding-top: 20px;

    @media screen and (max-width: 480px) {
        margin: 0px;

        font-size: 12px;
        max-width: 100%;
        white-space: normal;
    }
`;
export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;

   
`;


export const ImgWrap = styled.div`  
    max-width: 80%;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 768px) {
        margin-right: 50px;
    }

`;

export const Img=styled.img`
    width: 95%;
    transition: all 0.6s ease-out;
    &:hover {
        transform: scale(1.06);
        cursor: pointer;   
    }
`;


export const img=styled.img`
    width: 100%;
    
    
`;