import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setTheme } from '../store/slices/themeSlice';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [notifications, setNotifications] = useState(false);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    // Here you would typically update this setting in your backend or local storage
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={toggleNotifications}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default SettingsScreen;