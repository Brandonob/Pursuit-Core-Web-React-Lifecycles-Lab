import React from 'react'
import App from '../App'

class Form extends React.Component{
    
    handleListInput = (e) => {
        e.preventDefault()
        let newRTodo = e.target.children[0].value
        this.setState(prevState => {
            return {list: [...prevState.list, newRTodo]}
        })
    // debugger
    }
    // list: this.state.list.concat(e.target.children[0].value)

    // listOfItems = () => {
    //     let value = (this.state.list)
    //     return(
    //         <li key={value.toString()}>
    //             {value}
    //         </li>
    //     )
    // }
    render(){
        
        return(
            <div className="toDo">
            <form className = "form" onSubmit = {this.handleListInput}>
            <input type="text" placeholder="Enter a todo"/>
            {/* <ul>
            <this.listOfItems />
            </ul> */}
            </form>
            </div>
        )
    }

}

export default Form 