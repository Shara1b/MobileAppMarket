import StyledButton from "@/components/StyledButton";
import { StyleSheet, View } from "react-native";
import { returnDescriptionError } from "../../../helpers/returnDescriptionError";
import ControllerContent from "./ControllerContent";
import MainContent from "./MainContent";

interface ServerErrorProps {
  statusCode: number;
}

const IntervalServerError: React.FC<ServerErrorProps> = ({ statusCode }) => {
  const error = returnDescriptionError(statusCode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledButton
          icon="arrow-back-outline"
          sizeIcon={24}
          variant="transparment"
          style={{ width: 44, height: 44 }}
        />
        <StyledButton
          icon="close-outline"
          sizeIcon={24}
          variant="transparment"
          style={{ width: 44, height: 44 }}
        />
      </View>
      <MainContent
        smille={error.smille}
        title={error.title}
        description={error.description}
        errorCode={`ERR_${error.statusCode}`}
      />
      <ControllerContent buttons={error.buttons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingLeft: 12,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 50,
    paddingVertical: 26,
  },
});

export default IntervalServerError;
