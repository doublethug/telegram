import {Button, Image, StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import {useRef, useState} from "react";
import KeyboardAvoider from "../../components/KeyboardAvoider";

import colors from "../../styles/colors";
import styles from "./styles";
import mtproto from "../../store/mtproto";

// @ts-ignore
export default function AuthScreen({ navigation }) {
  const [phone, setPhone] = useState(null);
  const [country, setCountry] = useState(null);
  const input = useRef(null);

  const countries = {
    UA: "+380",
    DE: "+49"
  };

  const phoneSubmit = async () => {
    const temp = await mtproto.call("auth.sendCode", {
      phone_number: phone,
      settings: {
        _: "codeSettings",
      },
    });
    const { phone_code_hash } = temp;
    console.log("NG PHONE TEMP", temp)

    console.log(phone, phone_code_hash);

    navigation.push("AuthCode", { phone_number: phone, phone_code_hash });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoider style={styles.container}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.logo}
        />

        <Text style={styles.logoTitle}>Telegram</Text>
        <Text style={styles.logoCaption}>Enter phone number to continue</Text>

        <TextInput
          placeholder="Phone"
          selectionColor={colors.primary}
          style={styles.input}
          keyboardType="phone-pad"
          defaultValue={country ? countries[country] : undefined}
          maxLength={14}
          ref={input}
          onChangeText={() => setPhone}
        />
        <TextInput
          placeholder="Code"
          selectionColor={colors.primary}
          style={styles.input}
          keyboardType="phone-pad"
          defaultValue={country ? countries[country] : undefined}
          maxLength={14}
          ref={input}
          onChangeText={() => setPhone}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={phoneSubmit}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoider>
    </View>
  );
}
