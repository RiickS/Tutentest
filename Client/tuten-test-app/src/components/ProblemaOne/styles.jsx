import styled from 'styled-components'
import { Typography, makeStyles, createStyles } from "@material-ui/core";



export const useStyles = makeStyles(() => ({
    Parragraph: {
        textAlign: 'justify'
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