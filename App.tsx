import { StatusBar } from "expo-status-bar";
import React from "react";
import type { Node } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="Muhammad Audya Fadhlurrohman">
            NPM 202310041
          </Section>
          <Section title="Biodata">
            Seorang mahasiswa yang senang dalam berdiskusi, bertukar pikiran,
            dan hal-hal baru yang belum pernah dicoba.
          </Section>
          <Section title="Pendidikan">
            <Text style={styles.highlight}>IBI Kesatuan Bogor</Text>
            {"\n"}
            Teknologi Informasi
          </Section>
          <Section title="Keahlian">
            Microsoft Office
            {"\n"}
            Memasak
            {"\n"}
            Gaming
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;