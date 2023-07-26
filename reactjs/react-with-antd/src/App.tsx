import { Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
type MenuItem = Required<MenuProps>['items'][number];
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

function App() {
  const [select, setSelect] = useState(['option1']);
  const location = useLocation();
  const items: MenuItem[] = [
    { label: <Link to={'/option1'}>Option 1</Link>, type: 'group', key: 'option1' },
    { label: <Link to={'/option2'}>Option 2</Link>, type: 'group', key: 'option2' },
    { label: <Link to={'/option3'}>Option 3</Link>, type: 'group', key: 'option3' },

    // getItem(<Link to={'/option1'}>Option 1</Link>, 'option1'),
    // getItem(<Link to={'/option2'}>Option 2</Link>, 'option2'),
    // getItem(<Link to={'/option3'}>Option 3</Link>, 'option3'),
  ];
  useEffect(() => {
    const pathname = location.pathname.split('/');
    if (pathname.length > 1) {
      setSelect([pathname[1]]);
    }
  }, []);
  const onChange = (value: any) => {
    setSelect(value.key);
  };
  return (
    <div>
      <Menu onClick={onChange} selectedKeys={select} mode='inline' theme='dark' items={items} />
      <main>
        <Routes>
          <Route path='/' element={<div>home</div>} />
          <Route path='/option1' element={<div>option 1</div>} />
          <Route path='/option2' element={<div>option 2</div>} />
          <Route path='/option3' element={<div>option 3</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
// const ButtonCustom = styled(Button)`
//   background-color: green;
//   height: 50px;
// `;
