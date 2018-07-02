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
            scrollToLastMessage();
        }
        else
        {
            renderAlert("Message sending contain words more than 50 characters. Please try again.");
        }
    }
}

function triggerFileUpload()
{
    $("#flUpload").trigger("click");
}

function onImgUpload()
{
    let file = document.querySelector("#flUpload").files[0];
    let reader = new FileReader();
    if (file)
    {
        reader.readAsDataURL(file);
        reader.onloadend = function ()
        {
            addImage(reader.result);
            scrollToLastMessage();
        }
    }
}

function scrollToLastMessage()
{
    let divMsg = document.getElementById("divMsg");
    divMsg.scrollTop = divMsg.scrollHeight;
}