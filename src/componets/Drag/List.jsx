import React from 'react'

const List = (props) => {
    const drop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('id')
        const item = document.getElementById(id)
        item.style.display = 'block'

        e.target.appendChild(item)
        
    }

    const dragOver = (e) => {
        e.preventDefault();

    }
    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
        >
            {props.children}
        </div>
    )
}

export default List
