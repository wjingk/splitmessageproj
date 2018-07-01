'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$Component) {
    _inherits(Alert, _React$Component);

    function Alert(props) {
        _classCallCheck(this, Alert);

        var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

        _this.state = {
            message: _this.props.alertMsg
        };
        _this.removeDOMElement = _this.removeDOMElement.bind(_this);
        return _this;
    }

    _createClass(Alert, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            setTimeout(function () {
                _this2.removeDOMElement();
            }, 2000);
            return React.createElement(
                "div",
                { className: "alert alert-danger", role: "alert" },
                React.createElement(
                    "strong",
                    null,
                    "Error!"
                ),
                " ",
                this.state.message
            );
        }
    }, {
        key: "removeDOMElement",
        value: function removeDOMElement() {
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
        }
    }]);

    return Alert;
}(React.Component);

var renderAlert = function renderAlert(value) {
    var component = document.getElementById("divAlert");
    ReactDOM.render(React.createElement(Alert, { alertMsg: value }), component);
};