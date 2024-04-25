// @ts-ignore
import MTProto from "@mtproto/core/envs/browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import "react-native-get-random-values";
// @ts-ignore
import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";
import { TextDecoder, TextEncoder } from "web-encoding";

polyfillGlobal("TextEncoder", () => TextEncoder);
polyfillGlobal("TextDecoder", () => TextDecoder);

class CustomStorage {
  set(key: string, value: any) {
    console.log("SET", key, value);
    return AsyncStorage.setItem(key, value);
  }

  get(key: string) {
    console.log("GET", key, AsyncStorage.getItem(key));
    return AsyncStorage.getItem(key);
  }
}

export default new MTProto({
  api_id: process.env.API_ID,
  api_hash: process.env.API_HASH,
  storageOptions: {
    instance: new CustomStorage(),
  },
});
