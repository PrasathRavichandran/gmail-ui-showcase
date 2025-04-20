import { Note } from "@/fixtures/model";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React, { useCallback } from "react";
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import NOTES from "@/fixtures/notes";
import Animated, { AnimatedProps } from "react-native-reanimated";
import Box from "./Box";
import NoteListItem from "./NoteListItem";

interface Props {
  consentTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const StyledFlatList = createBox<Theme, AnimatedProps<FlatListProps<Note>>>(
  Animated.FlatList
);

const NoteList = ({ consentTop, onScroll }: Props) => {
  const renderItem = useCallback(({ item }: { item: Note }) => {
    return <NoteListItem {...item} />;
  }, []);

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      width={"100%"}
      ListHeaderComponent={<Box width={"100%"} height={consentTop} />}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
};

export default NoteList;
