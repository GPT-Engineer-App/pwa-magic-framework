import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeaturesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features</Text>
      <Text style={styles.description}>Discover what makes our application stand out from the rest.</Text>
      <View style={styles.featureList}>
        <Text style={styles.featureItem}>• Responsive Design</Text>
        <Text style={styles.featureItem}>• User-Friendly Interface</Text>
        <Text style={styles.featureItem}>• Fast Performance</Text>
        <Text style={styles.featureItem}>• Regular Updates</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  featureList: {
    marginTop: 10,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default FeaturesScreen;