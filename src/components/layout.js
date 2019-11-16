import React, {useEffect} from 'react';
import { Link } from 'gatsby';

export default ({ children }) => {
  console.log('rendered layout');
  
  useEffect(()=>{
    console.log('Layout mounted');
    return ()=>{console.log('Layout unmounted')}
  },[])

  return (
    <div>
      <h1>Static Layout Part</h1>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>

      <hr />

      {children}
    </div>
  );
};
