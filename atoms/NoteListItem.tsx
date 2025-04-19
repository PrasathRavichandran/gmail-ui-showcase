import { Note } from "@/fixtures/model";
import Box from "./Box";
import Text from "./Text";

interface NoteListItemProps extends Note {}

const NoteListItem = ({ body, title }: NoteListItemProps) => {
  return (
    <Box bg={"$background"}>
      <Box bg={"$background"} px={"lg"} py={"sm"}>
        <Text
          ellipsizeMode={"tail"}
          numberOfLines={1}
          fontWeight={"bold"}
          mb={"xs"}
        >
          {title}
        </Text>
        <Text
          ellipsizeMode={"tail"}
          numberOfLines={2}
          opacity={0.7}
          fontSize={14}
        >
          {body}
        </Text>
      </Box>
    </Box>
  );
};

export default NoteListItem;
