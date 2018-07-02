'use strict';

function getIndicator(index, totalPartial)
{
    return index + "/" + totalPartial + " ";
}

function splitMessage (userInput, charLimit)
{
    let objMsg = [];
    if (userInput.length <= charLimit)
    {
        objMsg.push(userInput);
    }
    else
    {
        const words = userInput.split(/\s+/g);
        const totalWords = words.length;
        const completeMsg = words.join(" ");
        const apprTotalPartial = Math.floor(completeMsg.length / charLimit) + ((completeMsg.length % charLimit) > 0 ? 1 : 0);
        const errorPart = words.filter(t => t.length >= charLimit);
        if (errorPart.length <= 0)
        {
            let reset = false;
            let currentChunk = "";
            for (let i = 0; i < totalWords; i++)
            {
                let currentWord = words[i];
                if (currentChunk == "")
                {
                    currentChunk = currentWord;
                }
                else
                {
                    let strTemp = currentChunk + " " + currentWord;
                    let indicator = getIndicator(objMsg.length + 1, apprTotalPartial);
                    if ((strTemp.length + indicator.length) < charLimit)
                    {
                        currentChunk = strTemp;
                    }
                    else
                    {
                        reset = true;
                    }
                }

                if (i == (totalWords - 1))
                {
                    reset = true;
                }

                if (reset)
                {
                    objMsg.push(currentChunk);
                    currentChunk = currentWord;
                    reset = false;
                }
            }

            for (let i = 0; i < objMsg.length; i++)
            {
                objMsg[i] = getIndicator(i + 1, objMsg.length) + objMsg[i];
            }
        }
    }
    return objMsg;
}