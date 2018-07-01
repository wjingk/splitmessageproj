'use strict'

const charLimit = 50;

class Message extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            message: []
        };
    }

    render()
    {
        const lstTemp = this.state.message;
        const lstMsg = lstTemp.map((msg) =>
            <div className="message-card">{msg}</div>
        );
        return (
            <div>{lstMsg}</div>
        );
    }

    updateMsg(value)
    {
        this.setState({
            message: this.state.message.concat(value)
        });
    }
}

let component = document.getElementById("divMsg");
const messageRender = ReactDOM.render(<Message />, component);

let renderMsg = function (value) {
    let success = true;
    let objMsg = splitMessage(value, charLimit);
    if (objMsg.length > 0)
    {
        messageRender.updateMsg(objMsg);
    }
    else
    {
        success = false;
    }
    return success;
}