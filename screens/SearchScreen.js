import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import { PaperProvider, TextInput, Menu, Divider, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { popularAction } from '../redux/slices/popularSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { upcomingAction } from '../redux/slices/upcomingSlice';
import { SearchBar } from '@rneui/themed';
import { topRatedAction } from '../redux/slices/topRatedSlice';
import { playingAction } from '../redux/slices/playingSlice';

const SearchScreen = () => {
    const [search, setSearch] = useState("");
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const popularMovies = useSelector(state => state.popular.popular);
    const upcomingMovies = useSelector(state => state.upcoming.upcoming);
    const topRatedMovies = useSelector(state => state.topRated.topRated);
    const playingMovies = useSelector(state => state.playing.playing);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [all, setAll] = useState('all');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(popularAction());
        dispatch(upcomingAction());
        dispatch(topRatedAction());
        dispatch(playingAction());
    }, [])

    const updateSearch = (search, filter=all) => {
        setAll(filter);
        console.log(search);
        setSearch(search);
        if (search) {
            if (filter === "all") {
                const filteredPopular = popularMovies.filter(movie => movie.title.includes(search));
                const filteredUpcoming = upcomingMovies.filter(movie => movie.title.includes(search));
                const filteredTopRated = topRatedMovies.filter(movie => movie.title.includes(search));
                const filteredPlaying = playingMovies.filter(movie => movie.title.includes(search));

                const combinedFilteredMovies = [
                    ...filteredPopular,
                    ...filteredUpcoming,
                    ...filteredTopRated,
                    ...filteredPlaying
                ];
                const uniqueFilteredMovies = combinedFilteredMovies.reduce((acc, current) => {
                    if (!acc.some(movie => movie.id === current.id)) {
                        acc.push(current);
                    }
                    return acc;
                }, []);
                setFilteredMovies(uniqueFilteredMovies);
            }
            else if(filter === "popular"){
                setFilteredMovies(popularMovies.filter(movie => movie.title.includes(search)));
            }
            else if(filter === "playing"){
                setFilteredMovies(playingMovies.filter(movie => movie.title.includes(search)));
            }
            else if(filter === "topRated"){
                setFilteredMovies(topRatedMovies.filter(movie => movie.title.includes(search)));
            }
            else if(filter === "upcoming"){
                setFilteredMovies(upcomingMovies.filter(movie => movie.title.includes(search)));
            }
        }
        else
            setFilteredMovies([]);
    };

    return (
        <View style={styles.background}>
            <PaperProvider>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={updateSearch}
                        value={search}
                        inputContainerStyle={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, borderBottomColor: 'white', borderBottomWidth: 1 }}
                        inputStyle={{ color: 'white' }}
                        placeholderTextColor={'white'}
                        searchIcon={{ color: 'white' }}
                        clearIcon={{ color: 'white' }}
                        containerStyle={{ backgroundColor: 'black', flex: 22 }}
                    />
                    <View
                        style={{ flex: 3 }}>
                        <Menu
                            style={{ marginTop: 60 }}
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<Icon name='sort' color={'white'} size={40} onPress={() => { openMenu(); }}></Icon>}>
                            <Menu.Item leadingIcon="movie-filter"
                                onPress={() => {
                                    updateSearch(search, 'all');
                                    closeMenu();
                                }} title="All" />
                            <Menu.Item leadingIcon="movie-play"
                                onPress={() => {
                                    updateSearch(search, 'playing');
                                    closeMenu();
                                }} title="Now Playing" />
                            <Menu.Item leadingIcon="movie-star"
                                onPress={() => {
                                    updateSearch(search, 'rated');
                                    closeMenu();
                                }} title="Top Rated" />
                            <Menu.Item leadingIcon="movie"
                                onPress={() => {
                                    updateSearch(search, 'popular');
                                    closeMenu();
                                }} title="Popular" />
                            <Menu.Item leadingIcon="movie-settings"
                                onPress={() => {
                                    updateSearch(search, 'coming');
                                    closeMenu();
                                }} title="Upcoming" />
                        </Menu>
                    </View>

                </View>
                {filteredMovies.length > 0 && filteredMovies.map(movie => <Text key={movie.id} style={{ color: 'white' }}>{movie.title}</Text>)}

            </PaperProvider>
        </View>
    );
}

export default SearchScreen;

