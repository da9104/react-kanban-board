import { useState } from 'react'
import '../styles/SideBar.css'
import showSideBarIcon from '../assets/icon-show-sidebar.svg'
import hideSideBarIcon from '../assets/icon-hide-sidebar.svg'
import HeaderDropdown from './HeaderDropdown'
import AddEditBoardModal from '../modals/AddEditBoardModal'

export default function SideBar({ isSideBarOpen, setIsSideBarOpen }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)
    const toggleSideBar = () => {
        setIsSideBarOpen((curr) => !curr)
    }

    return (
        <div className={`sidebar ${!isSideBarOpen && "sidebar-closed"} ${isBoardModalOpen && 'sidebar-infront'}`}>
            {isSideBarOpen && <HeaderDropdown setIsBoardModalOpen={setIsBoardModalOpen} />}
        <div className={`toggle-sidebar-container ${!isSideBarOpen && "toggle-closed"}`}
        onClick={() => toggleSideBar()}>

        <img src={isSideBarOpen ? hideSideBarIcon : showSideBarIcon}
            alt="show/hide sidebar icon"/>
            {isSideBarOpen && <p className='heading-M'>Hide Sidebar</p>}
        </div>
        {isBoardModalOpen && (
            <AddEditBoardModal
            type="ADD"
            setIsBoardModalOpen={setIsBoardModalOpen} 
            />
        )}
      </div>
    )
}
