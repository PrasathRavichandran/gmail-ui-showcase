import React from "react";
import Box, { BoxProps } from "./Box";

const Container: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props} flex={1} backgroundColor={"$background"}>
      {props.children}
    </Box>
  );
};

export default Container;
