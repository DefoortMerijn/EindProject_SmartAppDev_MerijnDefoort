import { Image, View } from 'react-native'

export default () => {
  return (
    <Image
    style={{ width: 150, height: 30, margin: 0 }}
    source={require('../assets/corsair-logo.svg')}
  />
  )
}
