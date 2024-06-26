import React, { useEffect, useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import mtproto from "../../mtproto";
import KeyboardAvoider from "../../components/KeyboardAvoider";

import colors from "../../styles/colors";
import styles from "./styles";

export default function AuthPhone({ navigation }) {
  const [phone, setPhone] = useState(null);
  const [country, setCountry] = useState(null);
  const input = useRef(null);

  const countries = {
    UA: "+380",
  };

  useEffect(() => {
    const start = Date.now();

    mtproto.call("help.getNearestDc").then((result) => {
      console.log(result.country, Date.now() - start, "ms");

      setCountry(result.country);
      input.current.focus();
    });

    (async () => {
      try {
        const me = await mtproto.call("users.getFullUser", {
          id: {
            _: "inputUserSelf",
          },
        });

        if (me) {
          navigation.replace("SettingsProfile");
          return;
        }
      } catch (error) {}
    })();
  }, []);

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
          defaultValue={countries[country]}
          maxLength={14}
          ref={input}
          onChangeText={setPhone}
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
