# React Native App

This is a React Native application built with Expo, focusing on local development.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

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
- `npm run dev` or `yarn dev`: Starts the development client.
- `npm run build:dev` or `yarn build:dev`: Displays a message about local development configuration.

## Development

This project is set up for local development using Expo. To test the app on your device:

1. Install the Expo Go app on your iOS or Android device.
2. Make sure your device is on the same Wi-Fi network as your development machine.
3. Run `npm start` or `yarn start` to start the development server.
4. Scan the QR code displayed in the terminal with your device's camera.

For more information on Expo development, visit the [Expo documentation](https://docs.expo.dev/).

## Environment Variables

To use Supabase in your local development:

1. Create a `.env` file in the root of your project.
2. Add the following lines to the `.env` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   Replace `your_supabase_url` and `your_supabase_anon_key` with your actual Supabase project details.

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