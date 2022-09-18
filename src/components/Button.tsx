import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  blue?: boolean;
  gray?: boolean;
}

export default function Button({ title, onPress, blue, gray }: ButtonProps) {
  return (
    <TouchableOpacity
      style={blue ? Styles.btnBlue : gray ? Styles.btnGray : Styles.btnLight}
      onPress={onPress}
    >
      <Text style={blue || gray ? Styles.smallTextLight : Styles.smallTextDark}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
