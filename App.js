import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/Authenticate/Login/Login";
import Signup from "./src/Authenticate/SignUp/Signup";
import JobDetail from "./src/Main/JobDetail/JobDetail";
import ApplyForm from "./src/Main/JobDetail/ApplyForm";

// import ForgotPassword from "./src/Authenticate/ForgotPass/forgot-pass";

// import Signup1 from "./src/Authenticate/SignUp/Signup1";
// import Signup2 from "./src/Authenticate/SignUp/Signup2";
// import Signup3 from "./src/Authenticate/SignUp/Signup3";

import Home from "./src/Main/Home/Home";
import Search from "./src/Main/Search/Search";
// import Chat from "./src/Main/Chat/Chat";
import Manager from "./src/Main/Manager/Manager";
import ApplyingJob from "./src/Main/Manager/Job/ApplyingJob";
import Profile from "./src/Main/Profile/Profile";
import SyncStorage from "sync-storage";
import DetailProfile from "./src/Main/Profile/DetailProfile";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTab = (props) => {
  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        style={styles.FacebookStyle}
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("Notification")}
      >
        <Image
          source={require("./assets/noti.png")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity
        style={styles.FacebookStyle}
        activeOpacity={0.5}
        onPress={() => {
          props.navigation.navigate("Login");
          SyncStorage.getAllKeys().map((k) => SyncStorage.remove(k));
        }}
      >
        <Image
          source={require("./assets/logout.png")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    ),
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "black",
        activeBackgroundColor: "black",
        activeTintColor: "tomato",
        inactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Trang chủ", headerTitleAlign: "center" }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ title: "Tìm kiếm", headerShown: false }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ title: "Chat", headerTitleAlign: "center" }}
      /> */}
      <Tab.Screen
        name="Manage"
        component={ApplyingJob}
        options={{ title: "Quản lý việc", headerTitleAlign: "center" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Hồ sơ", headerTitleAlign: "center" }}
      />
    </Tab.Navigator>
  );
};
// const SignUpStack = createStackNavigator();

// const Signups = (props) => {
//   return (
//     <SignUpStack.Navigator>
//       <SignUpStack.Screen name="Signup" component={Signup1} />
//       <SignUpStack.Screen name="Signup2" component={Signup2} />
//       <SignUpStack.Screen name="Signup3" component={Signup3} />
//     </SignUpStack.Navigator>
//   );
// };
const ProfileStack = createStackNavigator();

const Profiles = (props) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="DetailProfile" component={DetailProfile} />
    </ProfileStack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Home"
          component={MainTab}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen name="JobDetail" component={JobDetail} />
        <Stack.Screen name="ApplyForm" component={ApplyForm} />
        <Stack.Screen name="Profile" component={Profiles}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  FacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 30,
    borderRadius: 5,
    margin: 5,
  },
});
