import styled from 'styled-components'
import '../../assets/fonts/styles.css'


export const NavContainer = styled.div`
background-color: #212121;
-webkit-box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.97); 
box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.97);
z-index: 100000;
`
export const Menu = styled.div`
display: flex;
justify-content: space-between !important;
color: white;

h1{
    font-family:'Roboto-Bold';
    color: #dc3545;
}
`

export const Lists = styled.div`
font-family: 'Roboto-Medium', 'Helvetica', 'Sans Seriff';
text-align: center;
align-items: center;


ul {
    display: flex;
    a {
        text-decoration:none;
        list-style: none;

        img {
            max-width: 23px;

            &:hover {
                opacity: 0.7;
            }
        }

        li {
            margin-left:20px;
            margin-right:20px;
            font-size: 1rem;
            color: white;

            &:hover {
             opacity: 0.7;
    }
        }
}
}
`