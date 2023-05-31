import "./style/ButtonUIStyle.scss";

function ButtonUI(props) {
  return <button className={`button-ui button-ui--${props.className} `} onClick={props.onClick} > {props.tag} </button>;
}

export default ButtonUI;
