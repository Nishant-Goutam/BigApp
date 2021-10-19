import React from 'react'

const Item = (props) => {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('id', target.id)

        setTimeout(() => {
            target.style.display = "none";
        },0)
    }

    const dragOver = e => {
        e.stopPropagation();

    }
    return (
        <div
            id={props.id}
            className={props.className}
            draggable = {true}
            onDragStart={dragStart}
            onDragOver = {dragOver}
        >
            {props.children}
        </div>
    )
}

export default Item
