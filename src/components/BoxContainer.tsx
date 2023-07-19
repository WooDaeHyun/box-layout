import Box from "./Box";

const BoxContainer = () => {
  return (
    <div className="w-[600px] h-[600px] mt-[300px] relative bg-black">
      <Box color="bg-pink" moveDirection="top" />
    </div>
  );
};

export default BoxContainer;
