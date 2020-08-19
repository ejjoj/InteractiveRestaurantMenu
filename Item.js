const Item = (props) => {
  return (
    <li
      className={props.active ? 'active' : null}
      onClick={() => props.changeStatus(props.id)}>
      {props.name}
    </li>
  );
}