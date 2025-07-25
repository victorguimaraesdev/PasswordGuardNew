import { ContainerCentral } from "../components/home/containerCentral"
import { Dashboard } from "../components/home/dashboard"
// import { Header } from "../components/home/header"
import { SideBar } from "../components/home/sidebar"


export const Home = () => {
    return(
        <>
        {/* <Header/> */}
        <ContainerCentral>
            <SideBar/>
            <Dashboard/>
        </ContainerCentral>
        </>
      
    )
}