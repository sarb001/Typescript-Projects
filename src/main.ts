import './style.css';

interface Todo {
   title : string;
   isCompleted : boolean;
   readonly id : string;
}
const todos : Todo[] = []

const TodoContainer  = document.querySelector('.todocontainer') as HTMLDivElement ;

   const Todoinput = document.getElementById('input') as HTMLInputElement ; 

  // const Todoinput = document.getElementsByName('title')[0] as HTMLInputElement ;
   console.log('Todoinput here -',Todoinput.value);

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
  console.log(' To Do list is hereer -',todos);

  renderTodo(todos);

}
const renderTodo = (todos : Todo[]) => {
     todos.map((item) => {
        generateTodo(item.title,item.isCompleted,item.id);
     })
}
const  generateTodo = (title:string,isCompleted:boolean,id : string) => {
  
  //create Div to store alldata
    const todo = document.createElement('div') as HTMLDivElement ; 
    todo.className = "todo";

  //create Paragraph to store in p  
  const paragraph = document.createElement('p') as HTMLParagraphElement ; 
  paragraph.innerText = title;
  paragraph.className = "paragraph";
  //  create btn
  const btn = document.createElement('button') as HTMLButtonElement ;
  btn.innerText = "X";
  btn.className = "deleteBtn"

  // append all to list and then to Main Container 
  todo.append(paragraph,btn);
  TodoContainer.append(todo);

}
