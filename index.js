import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Card = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageSource}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  textContainer: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;
