// layout/Screens/Profile/EditProfile/components/ProfileStrength.tsx
import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const ProfileStrength = ({ progress }: { progress: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <View style={styles.strengthRow}>
          <StyledText variant="subtitle" size="medium">
            {progress}%
          </StyledText>
          <StyledText variant="subtitle-grey" size="ower-small">
            Сила резюме
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingBottom: 19,
    marginHorizontal: -25,
    paddingHorizontal: 25,
  },
  infoCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  progressContainer: {
    paddingHorizontal: 5,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  strengthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfileStrength;
