const submit = document.querySelector('#submit')
const input = document.querySelector('input')
const lists = document.querySelector('.lists')
const todoElement = document.querySelector('.todo')

let todoArr = []

submit.addEventListener('click',function(e){
    e.preventDefault()
    let id = parseInt(Math.random() *1000) 
    if(input.value){
        const todo =  new Todo(id,input.value)
        todoArr=[...todoArr,todo]
        Ui.displayTodo()
        Ui.clearInput()
    }else{
        return;
    }

})



class Todo{
    constructor(id,todo){
        this.id = id;
        this.todo = todo
    }
}


class Ui{
    constructor(){

    }
    static displayTodo(){
        let displayData = todoArr.map((item)=>(
            `<div class="todo">
            <p>${item.todo}</p>
            <span class="remove" data-id = ${item.id}>🗑️</span>
            </div>`
        ))
        lists.innerHTML = displayData.join(' ')
        Array.from(lists.children).map((todo)=>{
            const removeBtn = todo.querySelector('.remove')
            removeBtn.addEventListener('click',function(){
                todo.style.opacity = 0
                if(todo.style.opacity = 0){
                    removeBtn.parentElement.remove()
                    Ui.removeTOdo(removeBtn.dataset.id)
                } 
        
              
            })
    
            
        })
    }

    static removeTOdo(id){
       const newTodoArr = todoArr.filter((item,index)=>{
       return item.id !== parseInt(id) 

       })
      
       
    }

    static clearInput (){
        input.value  =''
    }
}

