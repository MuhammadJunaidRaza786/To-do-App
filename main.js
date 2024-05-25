window.addEventListener('load',function (){
    var form = document.getElementById("new_task_form")
    var input = document.getElementById("new_task_input")
    var list_el = document.getElementById("tasks")

    form.addEventListener('submit', function(event){
        event.preventDefault()

        var task = input.value

        if(!task){
            alert("please enter the task")
            return;
        }
        var task_list =document.createElement("div")
        task_list.classList.add("task")

        var task_content_list = document.createElement("div")
        task_content_list.classList.add("content")

        task_list.appendChild(task_content_list)

        var task_input_list = document.createElement("input")
        task_input_list.classList.add("text")
        task_input_list.type = "text"
        task_input_list.value = task
        task_input_list.setAttribute("readonly","readonly")

        task_content_list.appendChild(task_input_list)
        list_el.appendChild(task_list)
        
        
        var task_action = document.createElement("div")
        task_action.classList.add("actions")

        var task_edit = document.createElement("button")
        task_edit.classList.add("edit")
        task_edit.innerHTML = "Edit"

        var task_delete = document.createElement("button")
        task_delete.classList.add("delete")
        task_delete.innerHTML = "Delete"

        task_action.appendChild(task_edit)
        task_action.appendChild(task_delete)  
        task_list.appendChild(task_action)

        input.value = ""

        task_edit.addEventListener('click' ,function() {
            if(task_edit.innerHTML.toLowerCase() === "edit"){
                task_input_list.removeAttribute("readonly")
                // task_input_list.focus()
                task_edit.innerHTML = "Save"
            }
            else {
                task_input_list.setAttribute("readonly" , "readonly")
                task_edit.innerHTML = "Edit"

            }
            })
            task_delete.addEventListener('click',function(){
                list_el.removeChild(task_list)
        })
    })
}) 