import React from 'react'
import styled from 'styled-components'

const ContainerWithImage = styled.div`
    background-image: url("https://images.unsplash.com/photo-1490676940747-c906c30765d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 100vh;
    width: 100vw;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    background-color: white;
    border-radius: 20px;
    opacity: .95;
    padding: 15px;
    width: 500px;
    height: 700px;
`

const SignIn = () => {
    return (
        <ContainerWithImage>
            <Card>login form</Card>
        </ContainerWithImage>
    ) 

}

export default SignIn