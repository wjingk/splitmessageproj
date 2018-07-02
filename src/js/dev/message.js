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
        let lstMsg = [];
        for (let i = 0; i < lstTemp.length; i++)
        {
            if (lstTemp[i].type == "image")
            {
                lstMsg.push(<div className="message-card"><img src={lstTemp[i].value} /></div>);
            }
            else
            {
                lstMsg.push(<div className="message-card">{lstTemp[i].value}</div>);
            }
        }
        return (
            <div>{lstMsg}</div>
        );
    }

    updateMsg(objMsg, type)
    {
        let arrMsg = [];
        for (let i = 0; i < objMsg.length; i++)
        {
            arrMsg.push({
                value: objMsg[i],
                type: type
            });
        }
        this.setState({
            message: this.state.message.concat(arrMsg)
        });
    }
}

let component = document.getElementById("divMsg");
const messageRender = ReactDOM.render(<Message />, component);

let addImage = function(value) {
    messageRender.updateMsg([value], "image");
    return true;
}

let renderMsg = function(value) {
    let success = true;
    let objMsg = splitMessage(value, charLimit);
    if (objMsg.length > 0)
    {
        messageRender.updateMsg(objMsg, "text");
    }
    else
    {
        success = false;
    }
    return success;
}