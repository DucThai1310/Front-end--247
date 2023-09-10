import { Button, Col, Menu, MenuProps, Popconfirm, Row, Space, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DividerCustom from './components/Divider';
import { styled } from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
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
    // <Row style={{ width: '100vw' }}>
    //   <Col span={6} style={{ minHeight: '100vh' }}>
    //     <Menu
    //       style={{ height: '100%' }}
    //       onClick={onChange}
    //       selectedKeys={select}
    //       mode='inline'
    //       theme='dark'
    //       items={items}
    //     />
    //   </Col>
    //   <Col span={20}>
    //     <main>
    //       <Routes>
    //         <Route path='/' element={<div>home</div>} />
    //         <Route path='/option1' element={<div>option 1</div>} />
    //         <Route path='/option2' element={<div>option 2</div>} />
    //         <Route path='/option3' element={<div>option 3</div>} />
    //       </Routes>
    //     </main>
    //   </Col>
    <Container>
      <Row>
        <Col span={24}>
          <div className='box'>A</div>
        </Col>
      </Row>
      <Row
        gutter={[
          { sm: 6, md: 12 },
          { sm: 12, md: 6 },
        ]}>
        <Col span={24} sm={6} md={6} xl={6} xxl={6}>
          <div className='box'>B</div>
        </Col>
        <Col span={24} sm={18} md={18} xl={18} xxl={18}>
          <Row justify={'space-between'} align={'top'}>
            <Col span={24} md={12} xl={12} xxl={12}>
              <div style={{ height: '100px' }} className='box'>
                C
              </div>
            </Col>
            <Col span={24} md={12} xl={12} xxl={12}>
              <div className='box'>D</div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className='box'>E</div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className='box'>F</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <Space size={17} direction={'horizontal'}>
          Space
          <Button type='primary'>Button</Button>
          <UploadCustom>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </UploadCustom>
          <Popconfirm title='Are you sure delete this task?' okText='Yes' cancelText='No'>
            <Button>Confirm</Button>
          </Popconfirm>
        </Space>
      </div>
    </Container>
  );
}

export default App;
// const ButtonCustom = styled(Button)`
//   background-color: green;
//   height: 50px;
// `;
const Container = styled.div`
  .box {
    border: 1px solid;
    height: 100%;
    min-height: 50px;
  }
`;
const UploadCustom = styled(Upload)`
  .ant-btn-icon {
    color: red;
  }
`;
