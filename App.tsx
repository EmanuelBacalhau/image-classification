import "./global.css"

import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { Button } from "./components/button";
import * as ImagePicker from 'expo-image-picker';
import * as TensorFlow from '@tensorflow/tfjs';
import * as Mobilenet from '@tensorflow-models/mobilenet';
import * as FileSystem from 'expo-file-system';
import { decodeJpeg } from '@tensorflow/tfjs-react-native'
import { Classification } from "./components/classification";

type ClassificationType = {
  className: string;
  probability: number;
}

export default function App() {
  const [imageUri, setImageUri] = useState<string>('https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [objectDetects, setObjectDetects] = useState<ClassificationType[]>([]);

  async function imageClassification(imageUri: string) {
    await TensorFlow.ready();
    const model = await Mobilenet.load()

    const imageBase64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64
    })
    
    const imageBuffer = TensorFlow.util.encodeString(imageBase64, 'base64').buffer;
    const raw = new Uint8Array(imageBuffer);
    const imageTensor = decodeJpeg(raw);

    const classificationResult = await model.classify(imageTensor);

    setObjectDetects(classificationResult);
  }


  async function handleSelectImage() {
    setIsLoaded(true);

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ['images']
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];
        setImageUri(uri);
        await imageClassification(uri);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(false);
    }
  }

  return (
    <View className="bg-gray-900 flex-1 items-center justify-center p-9 gap-5">
      <StatusBar style="auto" />

      <Image 
        source={{
          uri: imageUri
        }}
        className="w-64 h-64" 
      />

      <View className="flex-1 w-full">
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={objectDetects} 
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={({ item }) => {
            return <Classification data={item} />
          }}
        />
        
      </View>

      {
        isLoaded 
          ? <ActivityIndicator size="large" className="text-purple-600" /> 
          : <Button title="Selecionar imagem" onPress={handleSelectImage} />
      }
    </View>
  );
}

