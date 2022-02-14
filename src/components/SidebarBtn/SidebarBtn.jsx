import './SidebarBtn.scss';

const SidebarBtn = ( {title, icon, active} ) => {
    return (
        <button className="sidebarBtn">
            <span className='sidebarBtn_icon'>{icon}</span>
            <span className='sidebarBtn_title'>{title}</span>
        </button>
    )
};

export default SidebarBtn;