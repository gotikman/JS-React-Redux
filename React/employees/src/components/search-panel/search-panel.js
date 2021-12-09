import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdateSearch(term);                   //! Передаєм вище значення term
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Знайти працівника"
                value={this.state.term}                       //! управляємий компонент
                onChange={this.onUpdateSearchLocal}
            />

        )
    }
}

export default SearchPanel;