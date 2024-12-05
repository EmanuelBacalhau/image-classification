import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  title: string
}

export const Button = ({ title, ...rest }: Props) => {

  return (
    <TouchableOpacity className="p-5 bg-purple-700 w-full rounded-lg items-center" {...rest}>
      <Text className="text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}