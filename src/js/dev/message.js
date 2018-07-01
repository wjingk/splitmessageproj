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
            <div className="message-container">
                <div className="message-card">{msg.value}</div>
                <div className="message-time">{msg.date}</div>
            </div>
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
        for (let i = 0; i < objMsg.length; i++)
            console.log("Length: " + objMsg[i].value.length + " | " + objMsg[i].value);
    }
    else
    {
        success = false;
    }
    return success;
}