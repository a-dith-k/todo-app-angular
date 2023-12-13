import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TODO APP';
  todos:Todo[]=[];

  ngOnInit(){
    this.todos=JSON.parse(localStorage.getItem('todos') as string);


  }

addTodo(form:NgForm) {
  let formData=form.value;

  this.todos.push({
    id:this.getRandom(10),
    heading: formData.todoHeading,
    description: formData.todoDescription,
    createdTime: new Date(),
    isCompleted: false
  });
  localStorage.setItem('todos',JSON.stringify(this.todos));
}

removeTodo(todo: Todo) {
  this.todos.splice(this.todos.indexOf(todo),1);
  localStorage.setItem('todos',JSON.stringify(this.todos));

}

toggleStatus(todo:Todo){
  todo.isCompleted=!todo.isCompleted;
}

getRandom(length:number){
    return Math.floor( Math.random()*Math.pow(10,length));
}

}

export interface Todo{
  id:number,
  heading:'string',
  description:string,
  createdTime:Date,
  isCompleted:boolean;
}
