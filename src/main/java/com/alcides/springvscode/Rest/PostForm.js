import React, {Component} from 'react'
import axios from 'axios'

class PostForm extends Component{
    constructor(props){
        super(this.props)

        this.state={
            a:'',
            b:''
        }
    }

changeHandler=(e)  =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
        console.log(response)
    })
}

render(){
    const {a, b} = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
            <div>
                <input 
                type='text' 
                name ='a' 
                onChange={this.changeHandler}
                value={a}></input>
            </div>
            <div>
                <input 
                type='text' 
                name ='b' 
                    onChange={this.changeHandler}
                value={b}></input>
            </div>
            <button type='submit'>Submetr</button>
            </form>
        </div>
    )
}
}

export default PostForm