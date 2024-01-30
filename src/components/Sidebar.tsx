import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <>
      <h2>Contacts</h2>
      Search
      <nav>
        <ul>
          <li>
            <NavLink to="/contacts/1"
              className={({isActive, isPending}) => (isActive ? 'link--active' : isPending ? 'link--pending' : '')}
            >Contact 1</NavLink>
          </li>
          <li>
            <NavLink to="/contacts/2"
              className={({isActive, isPending}) => (isActive ? 'link--active' : isPending ? 'link--pending' : '')}
            >Contact 2</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
