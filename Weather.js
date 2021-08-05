import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Snow: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Atmosphere: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Clear: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Clouds: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "Clouds",
    subtitle: "아무거나 막 쓰는 중 테스트",
  },
  Haze: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Mist: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
  Dust: {
    iconName: "weather-rainy",
    gradient: ["#649173", "#DBD5A4"],
    title: "hi",
    subtitle: "good",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions["Clouds"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={120}
          name={weatherOptions["Clouds"].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions["Clouds"].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions["Clouds"].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 38,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "400",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
