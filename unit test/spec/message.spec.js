describe("Unit Testing Split Message function.", function() {
    const charLimit = 50;

    it("When message shorter than 50 characters being sent.", function() {
        let userMsg = "This is just a simple message.";
        let expectedResult = ["This is just a simple message."];
        expect(splitMessage(userMsg, charLimit)).toEqual(expectedResult);
    });
 
    it("When message longer than 50 characters being sent.", function() {
        let userMsg = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
        let expectedResult = ["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."];
        expect(splitMessage(userMsg, charLimit)).toEqual(expectedResult);
    });

    it("When message more than 50 charactes with no white space between being sent.", function() {
        let userMsg = "Thisisalongmessagemorethan50charactersandnowhitespaceinbetween."
        let expectedResult = [];
        expect(splitMessage(userMsg, charLimit)).toEqual(expectedResult);
    });
});