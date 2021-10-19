import React from "react";
class LoginForm extends React.Component{
    state = {
        username: "",
        email: "",
        password: "",
        
    }
    emaiHandler = (event) => {
        this.setState({[event.target.name]:[event.target.value]})
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        //  this.setState([])
        
    }
    render() {
        return (
            <div>
               
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={this.submitHandler} autoComplete="off">
                                <div className="form-group">
                                    <input type="text"
                                        
                                        className="form-control"
                                        name="username"
                                        placeholder="username"
                                        autoComplete="off"
                                        onChange={this.emaiHandler }/>
                                        

                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="email" 
                                        onChange={this.emaiHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        placeholder="password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit"
                                        className="btn btn-success form-control"
                                        value="login"/>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm