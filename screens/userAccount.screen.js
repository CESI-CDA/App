import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/color";

const UserAccountScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.topheader}>
          <Image
            source={require("../assets/background-header-user-account.jpg")}
            style={styles.headerImage}
          />
        </View>
       
        <View style={styles.circle}>
        <Image
            source={require("../assets/example-photo-user.jpg")}
            style={styles.circle}
          />
        </View>
        <Text style={styles.username}>USERNAME</Text>

       
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  header: {
    width: Dimensions.get("window").width,
    height: 370,
    position: 'relative'
  },
  topheader: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
  },
  username:{

    textAlign: 'center',
    fontSize: 20,
    lineHeight:210
  },
  circle: {
        position: "absolute",
        width: 200, 
        height: 200, 
        borderRadius: 100, 
        top: "50%",
        left: "50%",
        marginTop: -100,
        marginLeft: -100, 
  },
});

export default UserAccountScreen;
