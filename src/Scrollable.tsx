import React from "react";

interface Props {
  children: React.ReactNode;
  vertical?: boolean;
}
const Scrollable: React.FC<Props> = ({ children, vertical }) => {
  const childrenRef = React.useRef<any[]>([]);
  let pos = {
    isActive: false,
    startX: -1,
    startY: -1,
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    pos.isActive = true;
    pos.startX = e.nativeEvent.clientX - childrenRef.current[0].scrollLeft;
    pos.startY = e.nativeEvent.clientY - childrenRef.current[0].scrollTop;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!pos.isActive) return;
    const diffX = e.nativeEvent.clientX - pos.startX;
    const diffY = vertical ? e.nativeEvent.clientY - pos.startY : 0;
    if (childrenRef?.current?.[0]) {
      childrenRef.current[0].scrollTo(diffX, diffY);
    }
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    pos.isActive = false;
  };

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as any, {
          ref: (ref: any) => {
            childrenRef.current[index] = ref;
          },
          onMouseDown: handleMouseDown,
          onMouseMove: handleMouseMove,
          onMouseUp: handleMouseUp,
        })
      )}
    </>
  );
};

export default Scrollable;
