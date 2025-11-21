# CityWeatherTracker

A React Native mobile application for iOS and Android that allows users to track weather information for multiple cities. The app features user authentication, profile management, camera functionality, and real-time weather data integration.

## Features

### Authentication

- **User Registration**: Create an account with email, password, phone number, and initial city preferences
- **User Login**: Secure authentication with email and password
- **Session Management**: Automatic authentication state management

### Main Features (After Login)

#### Profile Management

- Edit personal information (email, password, phone number)
- Manage saved cities with names and postal codes
- Add or remove cities from your profile
- Real-time form validation

#### Camera View

- Access to device front camera
- Real-time camera preview
- Permission handling for camera access

#### Weather Tracking

- Search weather by city name
- View current weather conditions including:
  - Temperature and feels-like temperature
  - Weather description
  - Humidity and pressure
  - Wind speed
  - Geographic coordinates
- Save cities for quick access
- View detailed weather information for saved cities
- Navigate to city detail pages with comprehensive weather data

## Tech Stack

- **React Native** 0.82.1
- **TypeScript** - Type-safe development
- **React Navigation** - Bottom tabs and stack navigation
- **React Hook Form** - Form management with validation
- **Yup** - Schema validation
- **React Native Vision Camera** - Camera functionality
- **AsyncStorage** - Local data persistence
- **OpenWeatherMap API** - Weather data integration
- **React Native Dotenv** - Environment variable management

## Project Structure

```
CityWeatherTracker/
├── assets/
│   └── fonts/          # Custom fonts (Montserrat)
├── components/         # Reusable UI components
│   ├── button/
│   ├── city-field/
│   ├── cities/
│   ├── form-group/
│   └── weather-item/
├── config/            # Configuration files (removed - using env)
├── contexts/          # React contexts (AuthContext)
├── navigation/        # Navigation configuration
│   └── stacks/        # Navigation stacks
├── schemas/           # Yup validation schemas
├── screens/           # Screen components
│   ├── auth/          # Authentication screens
│   └── main/          # Main app screens
├── services/          # Business logic services
├── styles/            # Global styles, colors, fonts
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Prerequisites

- Node.js >= 20
- React Native development environment set up
- iOS: Xcode and CocoaPods
- Android: Android Studio and Android SDK
- OpenWeatherMap API key

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd CityWeatherTracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup** (iOS only)

   ```bash
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

4. **Environment Configuration**

   Create a `.env` file in the root directory:

   ```env
   OPENWEATHER_API_KEY=your_api_key_here
   OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
   ```

   Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

5. **Start Metro bundler**

   ```bash
   npm start
   # or
   yarn start
   ```

6. **Run the app**

   For Android:

   ```bash
   npm run android
   ```

   For iOS:

   ```bash
   npm run ios
   ```

## Configuration

### Environment Variables

The app uses `react-native-dotenv` for environment variable management. Create a `.env` file in the root directory with:

- `OPENWEATHER_API_KEY`: Your OpenWeatherMap API key
- `OPENWEATHER_BASE_URL`: OpenWeatherMap API base URL (default: `https://api.openweathermap.org/data/2.5`)

### Fonts

The app uses Montserrat font family (Regular and Bold). Fonts are configured in `react-native.config.js` and automatically linked.

### Permissions

#### iOS

Camera permission is configured in `ios/CityWeatherTracker/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>This app needs access to your camera to display the camera view.</string>
```

#### Android

Camera permission is configured in `android/app/src/main/AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

## Usage

### Registration

1. Open the app
2. Navigate to "Register"
3. Fill in:
   - Email address
   - Password (minimum 6 characters)
   - Phone number (minimum 9 digits, numbers only)
   - At least one city with name and postal code
4. Submit the form

### Login

1. Enter your registered email and password
2. Tap "Login"
3. You'll be redirected to the main app

### Profile Management

1. Tap the "Profile" tab in bottom navigation
2. Tap "Edit Profile" to modify your information
3. Add or remove cities as needed
4. Save changes or cancel

### Camera

1. Tap the "Camera" tab in bottom navigation
2. Grant camera permission if prompted
3. Front camera view will be displayed

### Weather

1. Tap the "Weather" tab in bottom navigation
2. Search for a city by name
3. View current weather information
4. Save cities to your profile for quick access
5. Tap on a saved city to view detailed weather information

## Data Structure

### User Profile

```typescript
{
  email: string;
  password: string;
  phoneNumber: string;
  cities: Array<{
    name: string;
    address: {
      postCode: string;
    };
  }>;
}
```

### Weather Data

The app retrieves weather data from OpenWeatherMap API including:

- City name
- Temperature (current, feels-like)
- Weather conditions (description, icon)
- Atmospheric data (humidity, pressure)
- Wind information (speed)
- Geographic coordinates (latitude, longitude)

## API Integration

The app integrates with OpenWeatherMap API:

- **Endpoint**: `GET /weather`
- **Parameters**:
  - `q`: City name
  - `appid`: API key
  - `units`: metric
- **Documentation**: [OpenWeatherMap Current Weather API](https://openweathermap.org/current)

## Development

### Code Organization

- **Components**: Reusable UI components in `/components`
- **Screens**: Screen components in `/screens`
- **Services**: Business logic in `/services`
- **Types**: TypeScript definitions in `/types`
- **Schemas**: Validation schemas in `/schemas`
- **Styles**: Global styles, colors, and fonts in `/styles`

### Path Aliases

The project uses path aliases for cleaner imports:

- `@/` - Root directory
- `@screens/` - Screens directory
- `@components/` - Components directory
- `@services/` - Services directory
- `@types/` - Types directory
- `@styles/` - Styles directory
- `@schemas/` - Schemas directory

### Linting

```bash
npm run lint
```

## Building for Production

### Android

```bash
cd android
./gradlew assembleRelease
```

### iOS

Open the project in Xcode and archive for release.

## Troubleshooting

### Metro Bundler Issues

If you encounter issues, try clearing the cache:

```bash
npm start -- --reset-cache
```

### iOS Pod Issues

```bash
cd ios
rm -rf Pods Podfile.lock
bundle exec pod install
cd ..
```

### Environment Variables Not Loading

1. Ensure `.env` file exists in root directory
2. Restart Metro bundler with cache reset
3. Rebuild the app

## License

This project is private and proprietary.

## Support

For issues or questions, please refer to the project documentation or contact the development team.
