import classes from "./TodoItem.module.css";

// FC type은 children뿐만아니라
// key같은 특별한 프로퍼티를 컴포넌트에 추가해 사용할 수 있게함
// (event: React.MouseEvent)는 생략가능
const TodoItem: React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
