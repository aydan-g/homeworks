import { Dimensions } from "react-native";

export function getWidthByPercents(percents = 100, spacesCount = 0) {
  return (
    ((Dimensions.get("window").width - 16 * spacesCount) /
      100) *
    percents
  );
}
