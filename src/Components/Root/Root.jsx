import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='w-[100%] px-3'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;