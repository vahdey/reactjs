import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <h2>Login Form</h2>
                <form action="" className="col-lg-5" style={{ marginTop : 20}}>
                    <div className="form-group">
                        <label>Email : </label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                            placeholder="Pleas enter your email ..."/>
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password" value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                            placeholder="Pleas enter your password ..."/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger" type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
