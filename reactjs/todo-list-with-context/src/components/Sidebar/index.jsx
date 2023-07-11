import React from 'react';
import { sideBarConfig } from '../../constants';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function SideBar() {
  return (
    <SideBarContainer $green={true}>
      <nav className='sidebar__list'>
        {sideBarConfig.map(sidebar => {
          return (
            <NavLinkCustom to={sidebar.link} key={sidebar.id}>
              {sidebar.title}
            </NavLinkCustom>
          );
        })}
        {/* <Button $showColor={'#BF4F74'}>Show/Hide</Button>
        <ButtonNotHover $showColor={'#BF4F74'}>Show/Hide</ButtonNotHover> */}
      </nav>
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: ${props => (props.$green ? 'rgb(80, 216, 144)' : 'red')};
  height: calc(100vh - 64px);
  .sidebar__list {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
  a {
    color: white;
    background-color: rgb(80, 216, 144);
    border: 1px solid white;
    padding: 20px;
  }
`;
// const Button = styled.button`
//   background: ${props => props.$showColor};
//   color: 'white';
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;

// const ButtonNotHover = styled(Button)`
//   &:hover {
//     color: white;
//   }
// `;
const NavLinkCustom = styled(NavLink)`
  &.active {
    background-color: #ff7777;
  }
  /* & ~ & {
    background-color: #3767f7;
  }
  & + & {
    background-color: #3767f7;
  } */
`;
