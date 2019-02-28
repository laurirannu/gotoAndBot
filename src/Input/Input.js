import React from 'react';
import '../Input/Input.css'

class Input extends React.Component {
    state = {
        text: ""
    }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)} className="input-wrapper">
                <input
                    onChange={e => this.onChange(e)}
                    value={this.state.text}
                    type="text"
                    placeholder="Write something..."
                    autoFocus={true}
                    className="input"
                />
                <button type="submit" className="input__arrow">
                    <img src={require("../icons/right-arrow.svg")} alt="right-arrow" />
                </button>
            </form>
        );
    }
}

export default Input;