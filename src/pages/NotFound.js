import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h2>Page not found.<br /> Please refresh the Page</h2>

        <p>Got to HomePage <Link to="/">HomePage</Link>.</p>
    </div>
  )
}
