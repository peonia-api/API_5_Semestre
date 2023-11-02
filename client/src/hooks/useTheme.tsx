import { useColorScheme } from "react-native";
import { dark, light } from "../themes";


function useTheme(){
    const theme = useColorScheme()
    return theme === 'light' ? light : dark
}



export default useTheme