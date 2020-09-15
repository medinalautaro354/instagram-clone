import React, { useCallback, useEffect, useState } from 'react';

import { getStories } from '../../redux/actions/story';
import Story from '../../components/Story';
import { isStoriesLoading, storiesResult } from '../../redux/selectors/index';

import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator, RefreshControl, StyleSheet, View } from 'react-native';
import colors from '../../utils/colors';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Home = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => isStoriesLoading(state));
    const storyResult = useSelector((state) => storiesResult(state));

    const [stories, setStories] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadStories();
        setRefreshing(false);

    }, []);

    const loadStories = () => {
        dispatch(getStories());
        setSendRequest(true);

        if (sendRequest) {

            if (storyResult) {
                if (storyResult.ok) {

                    setStories(storyResult.stories)
                }
                else {
                    console.log(storyResult);
                }
            }
            setRefreshing(false);
            setSendRequest(false);
        }

    }

    useEffect(() => {
        loadStories()
    }, [])

    const renderItem = ({ item }) => (
        <Story
            image={item.image}
            username={item.user.username}
            likes={item.likes.length}
            comentary={item.description}
        />
    );

    return (

        <ScrollView
            nestedScrollEnabled={true}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {
                isLoading ?
                    <ActivityIndicator size="small" color={colors.buttonColor} /> :
                    <FlatList
                        data={stories}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
})

export default Home;