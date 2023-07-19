import Box from "./Box";

const BoxContainer = () => {
  return (
    <div className="w-[600px] h-[600px] mt-[300px] absolute">
      <Box color="bg-pink" moveDirection="leftTop">
        <Box color="bg-white" moveDirection="leftTop" />
      </Box>

      <Box color="bg-black" moveDirection="rightTop">
        <Box color="bg-mint" moveDirection="rightBottom" />
        <Box color="bg-blue" zIndex="z-10" />
      </Box>

      <Box color="bg-black" moveDirection="leftBottom">
        <Box color="bg-white" zIndex="z-10" />
      </Box>
      <Box color="bg-yellow" moveDirection="rightBottom" />
      <Box color="bg-green">
        <Box color="bg-red" moveDirection="left" />
        <Box color="bg-white" moveDirection="bottom" />
      </Box>
    </div>
  );
};

export default BoxContainer;
