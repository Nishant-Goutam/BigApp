import React from 'react'
import List from './List'
import Item from './Item'

import data from '../../dummy.json';
function Drag() {
  return <>
     <div >
      <main className="flexbox">
        <List id = 'list-1'className = 'list' >
          {
            data.map((d, idx) => {
              return (<Item id = {`item-${d.id}`} key={idx} className='item' >
                <p>{ d.name}</p>
          </Item>)
            })
          } 
        </List>

        <List id = 'list-2'className = 'list' >
          
        </List>
      </main>
    </div>
  </>;
   
}

export default Drag
