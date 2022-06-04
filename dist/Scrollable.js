import React from "react";
const Scrollable = ({ children, vertical }) => {
    const childrenRef = React.useRef([]);
    let pos = {
        isActive: false,
        startX: -1,
        startY: -1,
    };
    const handleMouseDown = (e) => {
        pos.isActive = true;
        pos.startX = e.nativeEvent.clientX - childrenRef.current[0].scrollLeft;
        pos.startY = e.nativeEvent.clientY - childrenRef.current[0].scrollTop;
    };
    const handleMouseMove = (e) => {
        var _a;
        if (!pos.isActive)
            return;
        const diffX = e.nativeEvent.clientX - pos.startX;
        const diffY = vertical ? e.nativeEvent.clientY - pos.startY : 0;
        if ((_a = childrenRef === null || childrenRef === void 0 ? void 0 : childrenRef.current) === null || _a === void 0 ? void 0 : _a[0]) {
            childrenRef.current[0].scrollTo(diffX, diffY);
        }
    };
    const handleMouseUp = (e) => {
        pos.isActive = false;
    };
    return (React.createElement(React.Fragment, null, React.Children.map(children, (child, index) => React.cloneElement(child, {
        ref: (ref) => {
            childrenRef.current[index] = ref;
        },
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
    }))));
};
export default Scrollable;
