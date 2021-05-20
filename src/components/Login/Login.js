import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
            
            <Content>
                <ContentLogoOne src="/images/cta-logo-one.svg"/>
                <SignUP>GET ALL THREE</SignUP>
                <Desc>Stream now. <TA>Terms apply.</TA></Desc>
                <ContentLogoTwo src="/images/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
        position: relative;
        height: calc(100vh - 70px);
        display: flex;
        justify-content:center;
        align-items: center;
        &:before{
            position:absolute;
            content:"";
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-image:url("/images/login-background.jpg");
            no-repeat: fixed;
            z-index: -1;
        }
`

const Content=styled.div`
        max-width:650px;
        padding: 80px 40px;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items:center;

`
const ContentLogoOne = styled.img``
const ContentLogoTwo = styled.img`
        width: 90%;
        
`
const SignUP = styled.a`
        width:100%;
        background-color: #0063e5;
        font: bold;
        padding: 17px 0;
        color: #f9f9f9;
        font-size: 18px;
        cursor:pointer;
        text-align: center;
        justify-content: center;
        border-radius: 4px;
        transition: all 250ms ;
        letter-spacing: 1.5px;
        margin-top:8px;
        margin-bottom:12px;

        &: hover{
            background-color: #0483ee;
        }

`

const Desc = styled.p`
        font-size: 12px;
        letter-spacing: 1px;
        text-align:center;
        line-height: 1.5;
        color: hsl(0deg 0% 75% / 80%)
        
`

const TA= styled.span`
    text-decoration: underline;
    cursor: pointer;
    color: white;
`