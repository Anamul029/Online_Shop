import Footer from '../Footer/Footer';
import DownNavBar from '../NavBar/DownNavBar';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1900px] mx-auto bg-blue-50 px-3'>
            <NavBar></NavBar>
            <DownNavBar></DownNavBar>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;