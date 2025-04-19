import { Bar } from "@/atoms";
import AnimatedBox, { AnimatedBoxProps } from "@/atoms/AnimatedBox";
import React from "react";

interface HeaderBarProps extends AnimatedBoxProps {
  children: React.ReactNode;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ children, ...rest }) => {
  return (
    <AnimatedBox position={"absolute"} top={40} left={0} right={0} {...rest}>
      <Bar
        variant={"headerBar"}
        flexDirection={"row"}
        alignItems={"center"}
        mx={"lg"}
        my={"md"}
        px={"sm"}
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimatedBox>
  );
};

export default HeaderBar;
