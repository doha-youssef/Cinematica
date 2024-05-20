import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { popularAction } from '../redux/slices/popularSlice';
import { topRatedAction } from '../redux/slices/topRatedSlice';
import { upcomingAction } from '../redux/slices/upcomingSlice';
import { playingAction } from '../redux/slices/playingSlice';
import MovieCard from '../components/MovieCard';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '../components/Slider';

const HomeScreen = ({navigation}) => {
    const popularMovies = useSelector(state => state.popular.popular);
    const topRatedMovies = useSelector(state => state.topRated.topRated);
    const upcomingMovies = useSelector(state => state.upcoming.upcoming);
    const playingMovies = useSelector(state => state.playing.playing);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(popularAction());
        dispatch(topRatedAction());
        dispatch(upcomingAction());
        dispatch(playingAction());
    }, [])
    return (
        <ScrollView style={styles.background}>
            <View style={styles.appBar}>
                <Icon name='movie-open' size={36} color={'white'}></Icon>
                <Text style={styles.appText}>Cinematica</Text>
            </View>
            <Slider></Slider>
            <ScrollView horizontal style={{margin: 10}}>
                {popularMovies.map(movie => <MovieCard key={movie.id} movie={movie} navigation={navigation}></MovieCard>)}
            </ScrollView>
            <ScrollView horizontal style={{margin: 10}}>
                {topRatedMovies.map(movie => <MovieCard key={movie.id} movie={movie} navigation={navigation}></MovieCard>)}
            </ScrollView>
            <ScrollView horizontal style={{margin: 10}}>
                {upcomingMovies.map(movie => <MovieCard key={movie.id} movie={movie} navigation={navigation}></MovieCard>)}
            </ScrollView>
            <ScrollView horizontal style={{margin: 10}}>
                {playingMovies.map(movie => <MovieCard key={movie.id} movie={movie} navigation={navigation}></MovieCard>)}
            </ScrollView>
        </ScrollView>
    );
}

export default HomeScreen;
