import React, {Component} from "react"

class Form extends Component{
    state = {
        list: " "
    }

    handleListInput = (e)=>{
        e.preventDefault()
       this.setState({
           list: e.target.children[0].value
        })
    }
    
    
    
    
    render(){
        
        return(
            <div className="toDo">
            <form className = "form" onSubmit = {this.handleListInput}>
            <input type="text" placeholder="Enter a todo"/>



            </form>
            </div>
        )
    }

}

export default Form 