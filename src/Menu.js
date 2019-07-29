import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => (
  <div>
    <Link to='App'><button id='app'>アンケート</button></Link>
    <Link to='View'><button id='view'>一覧</button></Link>
  </div>
)

export default Menu;