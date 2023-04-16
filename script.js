const submit = document.querySelector('#submit')
const input = document.querySelector('input')
const lists = document.querySelector('.lists')


let todoArr = []

submit.addEventListener('click',function(e){
    e.preventDefault()
    let id = parseInt(Math.random() *1000) 
    const todo = new Todo(id,input.value)
    todoArr=[...todoArr,todo]
    Ui.displayTodo()
    Ui.clearInput()
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
                removeBtn.parentElement.remove()
                Ui.removeTOdo(removeBtn.dataset.id)
            })
    
            
        })
    }

    static removeTOdo(id){
       const newTodoArr = todoArr.filter((item,index)=>{
       return item.id !== parseInt(id) 

       })
       todoArr = newTodoArr

    }

    static clearInput (){
        input.value  =''
    }
}

