import { NavLink } from 'react-router-dom';

import SidebarBtn from '../../components/SidebarBtn';

import {
    Overview,
    Tickets,
    Ideas,
    Contacts,
    Agents,
    Articles,
    Settings,
    Subscription
} from '../../assets/icons/icons';

import Logo from '../../assets/icons/logo.svg';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_logo">
                <img src={Logo} alt="" />
                <span>Dashboard Kit</span>
            </div>
            <NavLink className='link' to="/" exact>
                <SidebarBtn title='Overview' icon={<Overview/>} />
            </NavLink>
            <NavLink className='link' to="/tickets" exact>
                <SidebarBtn title='Tickets' icon={<Tickets/>}/>
            </NavLink>
            
            <NavLink className='link' to="/ideas" exact>
                <SidebarBtn title='Ideas' icon={<Ideas/>}/>
            </NavLink>
            <SidebarBtn title='Contacts' icon={<Contacts/>}/>
            <SidebarBtn title='Agents' icon={<Agents/>}/>
            <SidebarBtn title='Articles' icon={<Articles/>}/>
            <SidebarBtn title='Settings' icon={<Settings/>}/>
            <SidebarBtn title='Subscription' icon={<Subscription/>}/>
        </div>
    )
};

export default Sidebar;