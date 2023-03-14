import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Help Page</h2>
        <p>hsfgfsgfgsgv sifiusfiushdj sdhfshdjfhskue sdjjksdhfjdsfh</p>
        <nav>
            <NavLink to="faq">Show FAQ</NavLink>
            <NavLink to="contact">Contact us</NavLink>
            
        </nav>
        <Outlet />
    </div>
  )
}
