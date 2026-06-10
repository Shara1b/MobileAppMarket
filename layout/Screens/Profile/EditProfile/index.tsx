import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";

import { useForm } from "@/hooks/useForm";
import { useProfileProgress } from "@/hooks/useProfileProgress";
import AboutSection from "./components/AboutSection";
import BasicInfoSection from "./components/BasicInfoSection";
import ProfileStrength from "./components/ProfileStrength";
import SkillsSection from "./components/SkillsSection";

const EditProfile = () => {
  const navigation = useNavigation();

  const { values, handleChange } = useForm({
    displayName: "",
    professionalTitle: "",
    location: "",
    about: "",
    skills: [""],
    experienceLevel: "",
    yearsOfExperience: "",
    rateType: "hourly",
    rate: "",
    portfolio: [],
  });

  const { progress } = useProfileProgress(values);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="chevron-left" size={28} color="#1D1D1F" />
          </TouchableOpacity>
          <StyledText size="secondary" variant="button-text-grey">
            Создать профиль
          </StyledText>
          <StyledButton
            variantText="button-text-blue"
            variant="txt-btn"
            sizeText="small"
            lable="Сохранить"
            onPress={() => console.log("Save:", values)}
          />
        </View>

        <ProfileStrength progress={progress} />

        <BasicInfoSection
          displayName={values.displayName}
          setDisplayName={(text) => handleChange("displayName", text)}
          professionalTitle={values.professionalTitle}
          setProfessionalTitle={(text) =>
            handleChange("professionalTitle", text)
          }
          location={values.location}
          setLocation={(text) => handleChange("location", text)}
        />

        <AboutSection
          about={values.about}
          setAbout={(text) => handleChange("about", text)}
        />

        <SkillsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    padding: 4,
  },
});

export default EditProfile;
