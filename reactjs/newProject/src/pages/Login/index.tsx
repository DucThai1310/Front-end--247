import { Form, Input, Checkbox, Button, notification } from 'antd';
import { useLoginMutation } from '../../services/authService';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser, setUser } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { SITE_MAP } from '../../constants/site-map';
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [triggerLogin, { data, error }] = useLoginMutation();
  useEffect(() => {
    dispatch(logoutUser());
  }, []);
  useEffect(() => {
    if (error) {
      notification.error({
        //@ts-ignore
        message: error?.data,
      });
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      notification.success({
        message: 'Login success!',
      });
      dispatch(setUser(data));
      navigate(SITE_MAP.HOME.url);
    }
  }, [data]);
  const login = (values: any) => {
    triggerLogin({ email: values.email, password: values.password });
  };

  return (
    <div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={login}
        onFinishFailed={() => {}}
        autoComplete='off'>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
