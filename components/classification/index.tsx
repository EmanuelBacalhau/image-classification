import { View, Text } from "react-native"
import type { ClassificationType } from "../../types/classification-type";

type Props = {
  data: ClassificationType
}

export const Classification = ({ data }: Props) => {

  function checkProbability(probability: number) {
    if (probability >= 0.8) {
      return 'bg-green-500';
    } else if (probability >= 0.5) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  }

  const backgroundColor = checkProbability(data.probability);

  return (
    <View className="bg-gray-700 flex-row gap-3 rounded-lg p-5 max-h-[100px]">
      <View className={`w-2 h-full rounded-full ${backgroundColor}`} />

      <View>
        <Text className="text-white">
          Nome: {data.className}
        </Text>
        <Text className="text-white">
          Probabilidade: {Math.ceil(data.probability * 100)}%
        </Text>
      </View>
    </View>
  )
}