import { ReactNode, useMemo } from "react";

interface BoxProps {
  color: string;
  moveDirection?: string;
  children?: ReactNode;
  zIndex?: string;
}

const getMoveDirection = (moveDirection: string) => {
  switch (moveDirection) {
    case "leftTop": {
      return "translate-x-[-50%] translate-y-[-50%]";
    }
    case "top": {
      return "translate-y-[-50%]";
    }
    case "rightTop": {
      return "translate-x-[50%] translate-y-[-50%]";
    }
    case "left": {
      return "translate-x-[-50%]";
    }
    case "right": {
      return "translate-x-[50%]";
    }
    case "leftBottom": {
      return "translate-x-[-50%] translate-y-[50%]";
    }
    case "bottom": {
      return "translate-y-[50%]";
    }
    case "rightBottom": {
      return "translate-x-[50%] translate-y-[50%]";
    }
    default: {
      return "translate-x-[0%] translate-y-[0%]";
    }
  }
};

const BASE_BOX_STYLE =
  " border-2 border-black w-2/4 h-2/4 top-1/4 left-1/4 absolute";

const Box = ({
  color,
  moveDirection = "center",
  zIndex = "z-10",
  children,
}: BoxProps) => {
  const computedStyle = useMemo(() => {
    const boxBgColor = color;
    const boxLoaction = getMoveDirection(moveDirection);

    return [boxBgColor, boxLoaction].join(" ");
  }, [color, moveDirection]);

  return (
    <div className={`${BASE_BOX_STYLE} ${computedStyle} ${zIndex}`}>
      {children}
    </div>
  );
};

export default Box;
