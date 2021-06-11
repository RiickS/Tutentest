
import { Lists, Menu, NavContainer } from './styles';
import Github from '../../assets/icons/github.png'
import Linkedin from '../../assets/icons/linkedin.png'

export const NavbarMenu = () => {


    return (
        <div>
            <NavContainer className="container-flex p-4">
                <div className="row">
                    <div className="col-12">
                        <Menu className="">
                            <div className="brand"><h1>TUTEN TEST</h1></div>
                            <Lists className="list my-auto">
                                <ul className="m-0">
                                    <a href="/"><li>HOME</li></a>
                                    <a href="https://github.com/RiickS" target="_blank" rel="noreferrer"><li><img src={Github} alt="" /></li></a>
                                    <a href="https://www.linkedin.com/in/ricardosz/" target="_blank" rel="noreferrer"><li><img src={Linkedin} alt="" /></li></a>
                                </ul>
                            </Lists>
                        </Menu>
                    </div>
                </div>
            </NavContainer>
        </div>
    );
}