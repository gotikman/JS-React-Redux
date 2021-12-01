
import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value    //! міняєм 2 зннач. state одночасно за доп. name атрибута
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length >= 3 && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     if (this.state.name.length < 3 || !this.state.salary) return;
    //     this.props.onAdd(this.state.name, this.state.salary);
    //     this.setState({
    //         name: '',
    //         salary: ''
    //     })
    // }

    render() {
        const { name, salary } = this.state;


        return (
            <div className="app-add-form" >
                <h3>Добавити нового працівника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>

                    <input type="text"
                        minLength="1" maxLength="30"
                        pattern="[A-Za-z]{2,} [A-Za-z]{1,}"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        min="100" max="5000"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light"
                    >Добавити</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;