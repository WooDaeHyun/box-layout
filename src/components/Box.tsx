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
  "box-border border-2 border-black absolute w-2/4 h-2/4 top-1/4 left-1/4 bg-red";

const Box = ({}) => {
  return <div className={BASE_BOX_STYLE}></div>;
};

export default Box;
