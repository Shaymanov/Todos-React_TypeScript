// import './ToDoList.scss'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import { ToDo } from '../../models/todo-item'
import { ToDoContainer, ToDoListUl } from './ToDoList.styled'

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function, }) =>
{
  const checkedList = () =>
  {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) =>
      {
        return (
          <ToDoListItem key={item.id} toDoItem={item} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />
        )
      })
  }

  const unCheckedList = () =>
  {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) =>
      {
        return (
          <ToDoListItem key={item.id} toDoItem={item} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />
        )
      })
  }


  return (
    <ToDoContainer>
      <ToDoListUl className="todo-list failed">{checkedList()}</ToDoListUl>
      <ToDoListUl className="todo-list completed">{unCheckedList()}</ToDoListUl>
    </ToDoContainer>
  )
}
