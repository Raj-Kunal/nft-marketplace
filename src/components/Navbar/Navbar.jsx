import { logo1, Storefront, User } from "../../assets";
import "./navbar.css";
import { navLinks } from "../../constants";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className=" nav flex ">
        {/* logo */}
        <div className="logo flex">
        <img src={Storefront} alt="logo" className="storefront" />
        <img src={logo1} alt="logo"/>
        </div>

        {/* nav menu */}
        <div className="menu">
        <ul className="flex nav-items">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="nav-item flex"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <Button img={User} text={"Sign up"} />
      </ul>
        </div>

    </nav>
  )
}

export default Navbar
