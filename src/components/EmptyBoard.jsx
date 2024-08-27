import { useState } from 'react'
import AddEditBoardModal from '../modals/AddEditBoardModal'

export default function EmptyBoard({ type }) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)

    return (
        <div className='board-empty'>
            <h3 className='board-empty-text'> 
                {type === "EDIT" ? "This board is empty. Create a new column to get started."
                : "There are no boards available. Create a new board."
                }
            </h3>
            <button onClick={() => {
                setIsBoardModalOpen(true)
            }}
            className='add-column-btn'>
                {type === 'EDIT' ? "+ Add new Column" : "+ Add New Board"}
            </button>
            { isBoardModalOpen && <AddEditBoardModal type={type} setIsBoardModalOpen={setIsBoardModalOpen} /> }
        </div>
    )
}