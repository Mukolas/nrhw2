import React, {Component} from 'react';
import User from "./user/User";

class AllUsers extends Component {
    state ={users:false};
    constructor() {
        super();
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});
            });

    }
    render() {
        let {users}= this.state;
        return (
            <div>
                {
                  users && users.map(value=><User item={value} key={value.id}/>)
                }
            </div>
        )
    }
}

export default AllUsers
