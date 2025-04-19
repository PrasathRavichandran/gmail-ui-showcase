import { Container, Text } from "@/atoms";
import NoteList from "@/atoms/NoteList";
import HeaderBar from "@/components/HeaderBar";

export default function Index() {
  return (
    <Container>
      <NoteList />
      <HeaderBar>
        <Text>header bar</Text>
      </HeaderBar>
    </Container>
  );
}
