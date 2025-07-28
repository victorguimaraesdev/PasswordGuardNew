import { ContainerCentral } from "../components/home/containerCentral"
import { Dashboard } from "../components/home/containerDashboard"
import { SideBar } from "../components/home/containerSidebar"


export const Home = () => {
    return(
        <>
        <ContainerCentral>
            <SideBar/>
            <Dashboard/>
        </ContainerCentral>
        </>
      
    )
}