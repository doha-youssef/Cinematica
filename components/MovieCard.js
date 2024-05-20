import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Card } from 'react-native-paper';
import styles from '../styles';

const MovieCard = ({ movie, navigation }) => {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate('Details', movie)}>
                <Card style={{
                    marginRight: 20, shadowColor: 'white',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                }}>
                    <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={styles.imageCard}></Card.Cover>
                </Card>
            </Pressable>
        </View>
    );
}

export default MovieCard;
