import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../components/Card';

const FeaturesScreen = () => {
  const features = [
    { title: "Responsive Design", description: "Our app looks great on all devices, from mobile to desktop." },
    { title: "User-Friendly Interface", description: "Intuitive controls and layouts for the best user experience." },
    { title: "Fast Performance", description: "Optimized code ensures quick loading and smooth interactions." },
    { title: "Regular Updates", description: "We constantly improve and add new features based on user feedback." },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Features</Text>
      <Text style={styles.description}>Discover what makes our application stand out from the rest.</Text>
      
      {features.map((feature, index) => (
        <Card key={index} title={feature.title} content={feature.description} />
      ))}
    </ScrollView>
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default FeaturesScreen;