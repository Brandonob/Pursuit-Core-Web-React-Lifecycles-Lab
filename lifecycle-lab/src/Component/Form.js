import React, {Component} from "react"

class Form extends Component{
    state = {
        list: [],
        // handleChange: this.handleListInput
    }
    

    handleListInput = (e)=>{
        
    e.preventDefault()
    this.setState({
        list:e.target.children[0].value
        
    })
    debugger
    }
    // list: this.state.list.concat(e.target.children[0].value)

    listOfItems = () =>{
        let value = (this.state.list)
        return(
            <li key={value.toString()}>
                {value}
            </li>
        )
    }

    
    
    render(){
        
        return(
            <div className="toDo">
            <form className = "form" onSubmit = {this.handleListInput}>
            <input type="text" placeholder="Enter a todo"/>

            <ul>
            <this.listOfItems />
            </ul>
                
            

            </form>
            </div>
        )
    }

}

export default Form 