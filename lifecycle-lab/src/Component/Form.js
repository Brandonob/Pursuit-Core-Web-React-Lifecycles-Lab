import React, {Component} from "react"

class Form extends Component{
    state = {
        list: " "
    }

    handleListInput = (e)=>{
       this.setState({
           list: e.target.value
        })
        console.log({
            list:e.target.value
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