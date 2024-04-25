import { Button, StatusBar, StyleSheet, View } from "react-native";

// @ts-ignore
export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings"
    />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
