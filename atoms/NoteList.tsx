import { Note } from "@/fixtures/model";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React, { useCallback } from "react";
import { FlatList, FlatListProps } from "react-native";

import NOTES from "@/fixtures/notes";
import NoteListItem from "./NoteListItem";

interface Props {}

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList);

const NoteList = ({}: Props) => {
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
    />
  );
};

export default NoteList;
