import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNav from './src/navigation/AppNav';

function App() {
  useEffect(() => {
    (async () => {
      await BootSplash.hide({ fade: true });
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
