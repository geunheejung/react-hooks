"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// useState를 통해, react component에 종속되지 않고도 react의 event를 처리 가능.
// 이벤트를 분리된 파일, 다른 entity에 연결해서 처리 가능.
var useInput = function (initalValue, vaildator) {
    var _a = (0, react_1.useState)(initalValue), value = _a[0], setValue = _a[1];
    var onChange = function (event) {
        var value = event.target.value;
        var willUpdate = true;
        if (typeof vaildator === 'function') {
            willUpdate = vaildator(value);
        }
        if (willUpdate)
            setValue(value);
    };
    return { value: value, onChange: onChange };
};
function App() {
    var name = useInput('Mr.Geunhee');
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, "Hello"),
        React.createElement("input", __assign({ placeholder: "Name" }, name))));
}
exports.default = App;
//# sourceMappingURL=App.tsx.map