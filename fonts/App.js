import {useFonts, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins'

import Home from './src/screens/Home'

export default function App() {

  const [loadedFonts] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular
  })

  if (!loadedFonts){
    return null
  }

  return (  
    <Home />
  );
}

