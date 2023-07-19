import Box from "./Box";

const BoxContainer = () => {
  return (
    <div className="w-[600px] h-[600px] mt-[300px] relative table border-collapse">
      <Box color="bg-pink" moveDirection="leftTop">
        <Box color="bg-white" moveDirection="leftTop" />
      </Box>
      <Box color="bg-black" moveDirection="rightTop">
        <Box color="bg-mint" moveDirection="rightBottom" />
      </Box>
      <Box color="bg-black" moveDirection="leftBottom"></Box>
      <Box color="bg-yellow" moveDirection="rightBottom" />
      <Box color="bg-green">
        <Box color="bg-red" moveDirection="left" />
        <Box color="bg-white" moveDirection="bottom" />
        <Box color="bg-blue" moveDirection="edgeRight" />
        <Box color="bg-white" moveDirection="edgeLeft" />
      </Box>
    </div>
  );
};

export default BoxContainer;
