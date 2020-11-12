import React, { useCallback, useEffect, useState } from 'react';

import { getStories } from '../../redux/actions/story';
import Story from '../../components/Story';
import { isStoriesLoading, storiesResult } from '../../redux/selectors/index';

import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';

import colors from '../../utils/colors';
import { offset, limit } from '../../utils/paginate';
import CardUser from '../../components/CardUser';
import Carousel from 'react-native-snap-carousel';

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
    const [paginate, setPaginate] = useState({
        from: offset,
        to: limit
    });
    const [loading, setLoading] = useState(true);

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
        setSendRequest(true);

        if (sendRequest) {

            if (storyResult) {
                if (storyResult.ok) {
                    setStories(storyResult.stories)
                    setLoading(false);
                }
                else {
                    console.log(storyResult);
                }
            }
            setSendRequest(false);
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

    const userData = [
        {
            images: [
                {
                    url: 'https://elfarandi.nyc3.cdn.digitaloceanspaces.com/2020/08/Patricio.jpg'
                },
                {
                    url: 'https://i.pinimg.com/originals/96/8e/50/968e50b37cb7d42fd8d73bfa2244da94.jpg'
                },
                {
                    url: 'https://cnet2.cbsistatic.com/img/U3SOxUDDfEVy9rSABmfiASjXXT4=/940x0/2020/06/04/b45fd3ef-f1b4-4cb4-bdd8-ef6cdddab955/sponge-bob-cast.jpg'
                }
            ],
            username: 'pepe',
            description: 'instagram de pepe',
            id: '1235ddcre2',
            profile_picture_url: 'https://nosomosnonos.com/wp-content/uploads/2020/08/Bob-Esponja-Patricio-1080x675.jpg'
        },
        {
            images: [
                {
                    url: 'https://www.infobae.com/new-resizer/kMML2RU5CGQ3dkRLQ7b39sIISmU=/420x236/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/FYR6I6C6C5HF7H4JSQOWKNL7HY.jpg'
                },
                {
                    url: 'https://cdn.cienradios.com/wp-content/uploads/sites/3/2020/11/Operaron-a-Mirtha-Legrand-por-una-lesi%C3%B3n-cut%C3%A1nea-400x253.jpg'
                },
                {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Mirtha_Legrand_2013.jpg'
                }
            ],
            username: 'mirta_legrand',
            description: 'la eterna',
            id: '1235ddcre5',
            profile_picture_url: 'https://www.gente.com.ar/wp-content/uploads/2020/02/01.-Mirtha-Legrand-1.jpeg'
        },
        {
            images: [
                {
                    url: 'https://i1.wp.com/sinmordaza.com/wp-content/uploads/2020/09/SM-Marcelo-Tinelli-050920.jpg?fit=1500%2C870&ssl=1'
                },
                {
                    url: 'https://cdn.eltrecetv.com.ar/sites/default/files/styles/934x525/public/2020/11/02/marcelo-tinelli-separacion-guillermina-valdes-1280x720.jpg'
                },
                {
                    url: 'https://fotos.perfil.com/2020/08/04/trim/1200/900/marcelo-tinelli-996931.jpeg'
                }
            ],
            username: 'marcelo_tinelli',
            description: 'tinelli 13',
            id: '1235ddcr45',
            profile_picture_url: 'https://bucket2.glanacion.com/anexos/fotos/13/3279013w380.jpg'
        },
        {
            images: [
                {
                    url: 'https://images7.memedroid.com/images/UPLOADED753/5f6e205303d21.jpeg'
                },
                {
                    url: 'https://em.wattpad.com/7bfe04a7f7d0609b36f67f73bec0cb312a219ee9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b4478726b665877454d302d58773d3d2d3432392e3136316139653962353463623537663438373133343534383537322e6a7067?s=fit&w=720&h=720'
                },
                {
                    url: 'https://i.redd.it/izv1fiber2t41.jpg'
                }
            ],
            username: 'funado',
            description: 'instagram de funado',
            id: '1235ddcr10',
            profile_picture_url: 'https://pbs.twimg.com/media/EcJASu7XsAEHlJz.jpg'
        },
    ]
    const renderItemUsers = ({ item, index }) => {
        return (
            <CardUser
                images={item.images}
                username={item.username}
                description={item.description}
                id={item.id}
                profilePictureUrl={item.profile_picture_url} />
        )
    }

    return (

        <View style={styles.container}>
            { loading ?
                <ActivityIndicator size="small" color="#0000ff" /> :

                stories.length > 0 ?

                    <FlatList
                        data={stories}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                        refreshing={isLoading ? isLoading : false}
                        onRefresh={onRefresh}
                        onEndReached={() => onRefreshEnd()}
                        onEndReachedThreshold={0.5}
                    /> :
                    <>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Te damos la bievenida a Instagram.</Text>
                            <Text style={styles.paragraph}>Cuando sigas a alguien, podras ver las fotos y los videos que publica aqui.</Text>

                        </View>
                        <Carousel
                            data={userData}
                            renderItem={renderItemUsers}
                            sliderWidth={400}
                            itemWidth={300}
                        />
                    </>
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        padding: '20%'
    },
    text: {
        fontWeight: 'bold'
    },
    paragraph: {
        marginTop: '5%'
    }
})

export default Home;