import React from "react"
class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pw: ''
        }
        this.handlePW = this.handlePW.bind(this);
        this.check = this.check.bind(this);
    }
    handlePW(e) {
        this.setState({ pw: e.target.value })
    }
    check(e) {
        const v = this.state.pw;
        const orpw = '';
        e.preventDefault()
        if (v == orpw) {
            this.props.history.push('/dashboard')
        }
        else {
            alert('Please enter correct password')
        }
    }
    render() {
        return (
            <div>
                <form action="Javascript:void(0)" onSubmit={this.check}>
                    <input type="password" value={this.pw} onChange={this.handlePW} />
                </form>
            </div>
        )
    }
}

export default Auth;