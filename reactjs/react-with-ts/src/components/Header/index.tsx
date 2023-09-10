interface IProps {
  text: string;
  color: string;
}
function Header(props: IProps) {
  return <div style={{ backgroundColor: props.color }}>{props.text}</div>;
}

export default Header;
