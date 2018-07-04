'use strict';

function getIndicator(index, totalPartial)
{
    return index + "/" + totalPartial + " ";
}

function splitTextByWhitespace(textMsg)
{
    let arrWords = [];
    let currentWord = "";
    let addWord = false;
    for (let i = 0; i < textMsg.length; i++)
    {
        if (textMsg[i] != " ")
        {
            currentWord = currentWord + textMsg[i];
        }
        else
        {
            if (currentWord != "")
            {
                addWord = true;
            }
        }
        if (addWord || (i == (textMsg.length - 1)))
        {
            arrWords.push(currentWord);
            currentWord = "";
            addWord = false;
        }
    }
    return arrWords;
}

function calculateApproximatePartial(arrWords, charLimit)
{
    let totalLength = 0;
    let totalPartial = 0;
    for (let i = 0; i < arrWords.length; i++)
    {
        totalLength = totalLength + arrWords[i].length + 1;
    }
    let remainder = totalLength % charLimit;
    totalPartial = (totalLength - remainder) / charLimit;
    if (remainder > 0)
    {
        totalPartial = totalPartial + 1;
    }
    return totalPartial;
}

function splitMessage(userInput, charLimit)
{
    let objMsg = [];
    if (userInput.length <= charLimit)
    {
        objMsg.push(userInput);
    }
    else
    {
        let words = splitTextByWhitespace(userInput);
        const totalWords = words.length;
        const apprTotalPartial = calculateApproximatePartial(words, charLimit);

        let reset = false;
        let currentChunk = "";
        for (let i = 0; i < totalWords; i++)
        {
            let currentWord = words[i];
            if (currentWord.length < charLimit)
            {
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
            else
            {
                objMsg = [];
                break;
            }
        }

        for (let i = 0; i < objMsg.length; i++)
        {
            objMsg[i] = getIndicator(i + 1, objMsg.length) + objMsg[i];
        }
    }
    return objMsg;
}