import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  background: orange;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Navitem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: red;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <Navitem>
          <NavLink to="/">Home</NavLink>
        </Navitem>
        <Navitem>
          <NavLink to="Counter">Counter</NavLink>
        </Navitem>
        <Navitem>
          <NavLink to="contact">Contact</NavLink>
        </Navitem>
        <Navitem>
          <NavLink to="todo-list">ToDoList</NavLink>
        </Navitem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
