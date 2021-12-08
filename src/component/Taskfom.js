
import react from 'react'
import'./taskForm.css'
const addTask="Add a task" 
const steps=['enter a task','clik on button']
return(
    
    <div className="task-form">
        <ul>
          {steps.map(e=><li>{e}</li>)}  
            </ul>
     <input type="text" name="task" id=""/>
     <button className="Button">{addTask}</button>
     {loading <div> loading...</div>:<p>hello</p>}

    </div>
)