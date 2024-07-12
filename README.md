# React Native App

This is a React Native application built with Expo.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-native-app
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Use the Expo Go app on your iOS or Android device to scan the QR code from your terminal to load your project immediately.

## Scripts

- `npm start` or `yarn start`: Starts the development server.
- `npm run android` or `yarn android`: Starts the development server and opens the app in an Android emulator.
- `npm run ios` or `yarn ios`: Starts the development server and opens the app in an iOS simulator.
- `npm run web` or `yarn web`: Starts the development server and opens the app in a web browser.
- `npm test` or `yarn test`: Runs the test suite.
- `npm run lint` or `yarn lint`: Runs the linter.
- `npm run build` or `yarn build`: Builds the Android app using EAS Build.
- `npm run build:dev` or `yarn build:dev`: Builds the Android app for development using EAS Build.
- `npm run build:prod` or `yarn build:prod`: Builds the Android app for production using EAS Build.

## Building with EAS

To build your app using EAS, you need to be logged in to your Expo account. If you haven't already, create an account at https://expo.dev/ and then log in using the EAS CLI:

```
eas login
```

Then you can use the build commands mentioned above. For example, to build a development version:

```
npm run build:dev
```

This will start the build process on EAS servers. Once the build is complete, you'll receive a link to download the APK.

## Folder Structure

- `/src`: Contains the source code for the application.
  - `/components`: Reusable React components.
  - `/screens`: Screen components for each route.
  - `/store`: Redux store configuration and slices.
  - `/utils`: Utility functions and helpers.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.