'use strict'

var inputMsg = document.getElementById("txtInput");
inputMsg.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13)
        btnSendMsgClick();
});

function btnSendMsgClick()
{
    if (inputMsg.value != "")
    {
        let success = renderMsg(inputMsg.value);   
        if (success)
        {
            inputMsg.value = "";
            let divMsg = document.getElementById("divMsg");
            divMsg.scrollTop = divMsg.scrollHeight;
        }
        else
        {
            renderAlert("Message sending contain words more than 50 characters. Please try again.");
        }
    }
}