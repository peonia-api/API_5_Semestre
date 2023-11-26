import { useNetInfo } from "@react-native-community/netinfo";

const isConnectad = () => {
  const { type, isInternetReachable } = useNetInfo();     
  return isInternetReachable
}

export default isConnectad