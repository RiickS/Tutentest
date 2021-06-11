import { makeStyles } from '@material-ui/core';
import styled from 'styled-components'

export const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '0 auto',
        marginTop: 50,
        padding: theme.spacing(3),
        maxWidth: 500,
        textAlign: 'left',
        backgroundColor: '#505050'
    },

}));

export const MyPaperDark = styled.div`
background-color: '#303030'
`