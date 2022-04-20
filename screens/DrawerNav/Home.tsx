import { ImageBackground, Text, View } from 'react-native'

export const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/Corsair_bg.svg')}
      resizeMode="cover"
    >
      <View>
        <Text>Home</Text>
      </View>
    </ImageBackground>
  )
}
