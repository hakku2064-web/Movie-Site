import { Link,NavLink } from 'react-router-dom'
import "../nav/header.css"

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/">MOVIESITE</Link>
      </div>
     
    <div className='navbar'>
        <nav className='nav-menu'>
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/tvshows">TV shows</NavLink></li>
        <li><NavLink to="/mylist">List</NavLink></li>
        <li><NavLink to="/search"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
</svg>
</NavLink></li>
        <li><NavLink to="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
		<path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
		<path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
	</g>
</svg>
</NavLink></li>
      </ul>
      </nav>
    </div>
   
    </div>
  )
}

export default Header