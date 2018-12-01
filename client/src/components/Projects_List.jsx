import React from 'react';
import Projects_List_Item from './Projects_List_Item.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => <Projects_List_Item item={item}/>)}
  </div>
)
export default List;