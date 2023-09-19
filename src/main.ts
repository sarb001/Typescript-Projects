import './style.css';

interface Todo {
   title : string;
   isCompleted : boolean;
   readonly id : string;
}
const todos : Todo[] = []

const TodoContainer  = document.querySelector('.todocontainer') as HTMLDivElement ;

const Todoinput = document.getElementsByName('title')[0] as HTMLInputElement ;
const myForm = document.getElementById('myForm') as HTMLFormElement ; 

myForm.onsubmit = (e) => {
  e.preventDefault(); 
  const todo : Todo = {
    title : Todoinput.value,
    isCompleted : false,
    id : String(Math.random() * 1000),
  }
  todos.push(todo);
  Todoinput.value = '';
  console.log(' To Do list is -',todo);

}