import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => (
  <div>
    <Link to='App'><button>アンケート</button></Link>
    <Link to='View'><button>一覧</button></Link>
  </div>
)

export default Menu;