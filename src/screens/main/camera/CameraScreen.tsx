import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import CameraReverseIcon from '@assets/svg/camera-reverse-outline.svg';
import FlashIcon from '@assets/svg/flash-outline.svg';
import FlashOffIcon from '@assets/svg/flash-off-outline.svg';

import { colors } from '@/styles';

import styles from './styles';

export default function CameraScreen() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
    'front',
  );
  const [torch, setTorch] = useState<'off' | 'on'>('off');
  const device = useCameraDevice(cameraPosition);
  const camera = useRef<Camera>(null);
  const [isActive, setIsActive] = useState(hasPermission);

  useEffect(() => {
    if (hasPermission) {
      setIsActive(true);
    } else {
      checkPermission();
    }
  }, [hasPermission]);

  const checkPermission = async () => {
    const result = await requestPermission();
    if (result) {
      setIsActive(true);
    } else {
      Alert.alert(
        'Camera Permission',
        'Camera permission is required to use this feature. Please enable it in settings.',
      );
    }
  };

  const toggleCamera = () => {
    setCameraPosition(prev => (prev === 'front' ? 'back' : 'front'));
  };

  const toggleTorch = () => {
    setTorch(prev => (prev === 'off' ? 'on' : 'off'));
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Requesting camera permission...</Text>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
        <TouchableOpacity style={styles.button} onPress={checkPermission}>
          <Text style={styles.buttonText}>Request Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No camera device found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camera}
        device={device}
        isActive={isActive}
        photo={true}
        torch={torch}
      />

      {/* Top right controls */}
      <View style={styles.topControls}>
        <TouchableOpacity style={styles.controlButton} onPress={toggleCamera}>
          {cameraPosition === 'front' ? (
            <CameraReverseIcon width={24} height={24} color={colors.white} />
          ) : (
            <CameraReverseIcon width={24} height={24} color={colors.white} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={toggleTorch}
          disabled={!device.hasTorch}
        >
          {torch === 'off' ? (
            <FlashOffIcon width={24} height={24} color={colors.white} />
          ) : (
            <FlashIcon width={24} height={24} color={colors.white} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
