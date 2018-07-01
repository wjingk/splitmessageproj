'use strict'

class Alert extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            message: this.props.alertMsg
        };
        this.removeDOMElement = this.removeDOMElement.bind(this);
    }

    render()
    {
        setTimeout(() => {
            this.removeDOMElement();
        }, 2000);
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Error!</strong> {this.state.message}
            </div>
        );
    }

    removeDOMElement()
    {
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
    }
}

let renderAlert = function (value) {
    let component = document.getElementById("divAlert");
    ReactDOM.render(<Alert alertMsg={value} />, component);
}