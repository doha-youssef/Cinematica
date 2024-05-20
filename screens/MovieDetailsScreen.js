import React, { useState } from 'react';
import { Image, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieDetailsScreen = ({route: {params:movie}}) => {
    const [favorite, setFavorite] = useState(false);
    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} width={250} height={350}></Image>
            {!favorite && <Icon name='heart-outline' size={40} onPress={()=>setFavorite(true)}></Icon> }
            {favorite && <Icon name='heart' size={40} color={'red'} onPress={()=>setFavorite(false)}></Icon>}
        </View>
    );
}

export default MovieDetailsScreen;
