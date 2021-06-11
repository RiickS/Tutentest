import styled from 'styled-components'
import { Typography, makeStyles, createStyles } from "@material-ui/core";



export const useStyles = makeStyles(() => ({
    datePicker: {
        color: "#fff",
        "& .MuiInput-root": {
            fontSize: "30px !important",
            color: "#fff",
            marginTop: "25px",
        },
        "& .MuiInputLabel-root": {
            fontSize: "20px !important",
            fontFamily: "Roboto-Medium",
            marginBottom: "10px",
            color: "#fff"
        },
        "& .MuiSvgIcon-root": {
            color: "#fff",
            fontSize: "20px",
            width: "2.5rem",
            height: "2rem",
        },
    },
    formControl: {
        minWidth: 120,
        width: 410,
        marginTop: 40,
        color: "#fff",
        "& .MuiInputLabel-animated": {
            color: "#fff",
            fontSize: 25,
        },
        "& .MuiPaper-root": {
            color: "red !important",
            fontSize: "25 !important",
        },
        "& .MuiMenu-root": {
            color: "red !important",
            fontSize: "25 !important",
        },
        "& .MuiSelect-select.MuiSelect-select": {
            marginTop: 10,
            color: "#fff",
            fontSize: "25px"
        },
        "& .MuiSelect-select:not([multiple]) option, .MuiSelect-select:not([multiple]) optgroup": {
            background: "#303030",
            color: "#fff",
            padding: 10,
            margin: 5,
        },
    },
    selectEmpty: {
        marginTop: "10px"
    },
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
export const Title = styled.h5`
color: white;

background: "#303030";
`
export const Icon = styled.img`
width: 25px;
height: 25px;

`

export const Text = styled.p`
text-align: justify;
`

export const Form = styled.form`

.currentHour{
    label{
        font-size: 2rem;
    }
}
`




