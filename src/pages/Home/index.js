import React, { useCallback, useEffect, useState } from 'react';

import { getStories } from '../../redux/actions/story';
import Story from '../../components/Story';
import { isStoriesLoading, storiesResult } from '../../redux/selectors/index';

import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../../utils/colors';
import { offset, limit } from '../../utils/paginate';

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
    const [paginate, setPaginate] = useState({
        from: offset,
        to: limit
    });

    const onRefreshEnd = () => {
        let dto = {};
        if (!isLoading) {
            if (stories.length >= paginate.to) {
                nextPaginate();

                dto = {
                    from: offset,
                    to: paginate.to + limit
                }
            }
            dispatch(getStories(dto));
        }
    }

    const nextPaginate = () => {
        setPaginate({
            from: offset,
            to: paginate.to + limit
        })
    }

    const resetPaginate = () => {
        setPaginate({
            from: offset,
            limit: limit
        })
    }

    const onRefresh = useCallback(() => {
        let dto = {
            from: offset,
            to: limit
        }

        resetPaginate();

        dispatch(getStories(dto));
    }, []);

    const loadStories = () => {
        if (storyResult) {
            if (storyResult.ok) {
                setStories(storyResult.stories)
            }
            else {
                console.log(storyResult);
            }
        }
    }

    useEffect(() => {
        dispatch(getStories(paginate));
    }, [])

    useEffect(() => {
        loadStories();
    }, [storyResult, stories])

    const renderItem = ({ item }) => (
        <Story
            image={item.image}
            username={item.user.username}
            likes={item.likes.length}
            comentary={item.description}
        />
    );

    return (

        <View style={{ width: '100%', height: '100%' }}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                refreshing={isLoading ? isLoading : false}
                onRefresh={onRefresh}
                onEndReached={() => onRefreshEnd()}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}

const styles = StyleSheet.create({
})

export default Home;