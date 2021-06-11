import { HomeView } from '../components/HomeView/HomeView'
import { NavbarMenu } from '../components/Navbar/Navbar'
import { Body } from './styles'

export const Home = () => {
    return (
        <Body>
            <NavbarMenu />
            <HomeView />
        </Body>
    )
}
