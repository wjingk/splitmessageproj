'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var charLimit = 50;

var Message = function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message(props) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

        _this.state = {
            message: []
        };
        return _this;
    }

    _createClass(Message, [{
        key: "render",
        value: function render() {
            var lstTemp = this.state.message;
            var lstMsg = [];
            for (var i = 0; i < lstTemp.length; i++) {
                if (lstTemp[i].type == "image") {
                    lstMsg.push(React.createElement(
                        "div",
                        { className: "message-card" },
                        React.createElement("img", { src: lstTemp[i].value })
                    ));
                } else {
                    lstMsg.push(React.createElement(
                        "div",
                        { className: "message-card" },
                        lstTemp[i].value
                    ));
                }
            }
            return React.createElement(
                "div",
                null,
                lstMsg
            );
        }
    }, {
        key: "updateMsg",
        value: function updateMsg(objMsg, type) {
            var arrMsg = [];
            for (var i = 0; i < objMsg.length; i++) {
                arrMsg.push({
                    value: objMsg[i],
                    type: type
                });
            }
            this.setState({
                message: this.state.message.concat(arrMsg)
            });
        }
    }]);

    return Message;
}(React.Component);

var component = document.getElementById("divMsg");
var messageRender = ReactDOM.render(React.createElement(Message, null), component);

var addImage = function addImage(value) {
    messageRender.updateMsg([value], "image");
    return true;
};

var renderMsg = function renderMsg(value) {
    var success = true;
    var objMsg = splitMessage(value, charLimit);
    if (objMsg.length > 0) {
        messageRender.updateMsg(objMsg, "text");
    } else {
        success = false;
    }
    return success;
};