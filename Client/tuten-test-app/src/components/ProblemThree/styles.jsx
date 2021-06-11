import styled from 'styled-components'
import { makeStyles } from "@material-ui/core";



export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: 900,
        margin: 'auto',
        textAlign: 'left'
    },
    textStyle: {
        '& .MuiTypography-root': {
            variantMappin: 'p',
            color: '#fff',
            textAlign: 'left !important',
            wordBreak: 'break-word',
            textIndent: '32px',
            whiteSpace: 'pre-wrap'
        }
    },
    button: {
        marginTop: 14
    },
    formClass: {
        textAlign: 'center',
        color: '#fff',
        '& .MuiInputLabel-filled': {
            color: '#fff',
        },
        '& .MuiInputBase-input': {
            color: '#fff',
        },
        '.MuiFilledInput-input': {
            width: 400
        }
    }
}));

export const Container = styled.div`
background-color: #303030;
color: white;
font-family: 'Roboto-Regular', 'Helvetica';
height: calc(100vh -100px);

.button {
    width: 150px;
}

.card {
    border: 1px solid #303030;

}

.card-body {
    background-color: #303030;
    border: none;
    display: block;
}
`

export const Text = styled.p`
text-align: justify;
`





