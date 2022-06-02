import React from 'react';
import styled from 'styled-components';

function EmailButton(props)
{
    const orange = {
        backgroundColor: '#FFF7F1',
        color: '#FF8B37',
        border: '2px solid #FF8B37',
    }

    const pink = {
        color: '#FF708D',
        border: '2px solid #FF708D',
        backgroundColor: '#FFF0F3'
    }

    var buttonStyle = pink;
    if(props.color === "orange")
        buttonStyle = orange;

    return(
        <EmailContainer>
            <a className="button" style={buttonStyle} href="mailto:arianarajewski@gmail.com">Send me an email!</a>
        </EmailContainer>
    );
}

export default EmailButton;

const EmailContainer = styled.div`
    transition: 0.3s all ease-in;
    
    :hover
    {
        transform: scale(1.025);
    }
`
