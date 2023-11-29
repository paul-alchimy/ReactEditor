import { useState } from "react";
import Button from "../Button/Button";
import { MdPerson } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar bg-secondary">
      <section className="navbar-section">
        <a className="navbar-brand mr-2">React Editor</a>
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <Button onClickHandler={toggleUserMenu} IconComponent={MdPerson} />
        </div>
      </section>
    </header>
  );
};

export default Header;
