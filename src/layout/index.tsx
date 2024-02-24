import { Outlet } from "react-router";
// import Sidebar from "../Component/Sidebar";
import MainPage from "../pages/main";
import Header from "../component/Header";

const MainLayout = () => {
    return (
        <div>
            {/* <div className="w-48 bg-gray-300"><Sidebar /></div> */}
            {/* <div> */}
            <Header />
            <Outlet />
            <MainPage />
            {/* </div> */}
        </div>
    )
}

export default MainLayout;