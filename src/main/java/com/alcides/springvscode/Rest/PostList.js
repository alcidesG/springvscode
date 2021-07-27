import React, {Component} from 'react'
import axios from 'axios'

class PostLinst extends Component{
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            this.setState({
                post:Response.data
            })
            console(Response.data)
        })
    }

    render(){
        const {posts}=this.state
        return(
            <div>
                <h1></h1>
                {
                    posts.map(post => <div key={post.id}>post.title</div>)
                }
                
            </div>
        )
    }
}