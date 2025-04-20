import { Box, Container, Text } from "@/atoms";
import NoteList from "@/atoms/NoteList";
import TouchableOpacity from "@/atoms/Touchable";
import HeaderBar from "@/components/HeaderBar";
import useStickyHeader from "@/hooks/useStickyHeader";
import FeatherIcon from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
import { DrawerProps } from "./_layout";

export default function Index() {
  const navigation = useNavigation<DrawerProps>();

  const {
    headerBarHeight,
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
  } = useStickyHeader();

  return (
    <Container>
      <NoteList consentTop={headerBarHeight} onScroll={handleScroll} />
      <HeaderBar onLayout={handleNoteListLayout} style={headerBarStyle}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} ml={"lg"}>
          <Text>Search in emails</Text>
        </Box>
        <TouchableOpacity>
          <FeatherIcon name={"more-vertical"} size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  );
}
