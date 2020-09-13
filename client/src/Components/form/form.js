import React, {Component} from 'react';
import './forms.css'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'drink special'
        }
    }   

    handleUsernameChange = event => {
        this.setState({
          username: event.target.value  
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value  
          })
  
        }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value  
          })

        }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, topic} = this.state
        return (
            <form onsubmit={this.handleSubmit}>
                <div>
                    <h3>
                        Contact Us
                    </h3>
                    <label>
                        Username
                    </label>
                    <input 
                        type= 'text' 
                        value={username} 
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                       <option value="drink special">Drink Specials</option> 
                       <option value="account">Account</option> 
                       <option value="help">Help</option> 
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form> 
        )
    }
}

export default Form