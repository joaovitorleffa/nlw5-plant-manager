import React, { ReactNode } from "react";
import { Text, View } from "react-native";

interface EmojiProps {
  children: ReactNode;
  size?: number;
}

const Emoji = ({ children, size }: EmojiProps) => {
  return <Text style={{ fontSize: size ?? 44 }}>{children}</Text>;
};

export default Emoji;
