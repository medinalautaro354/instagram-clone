import React from 'react';

import Story from '../../components/Story';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
    const stories = [{
        id: 1,
        image: 'https://www.infobae.com/new-resizer/6IjfoYNLGioOD1KYwoBMLZik7Og=/420x560/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/CEOLFVYKMZG73EN7C4WQCCGUDI',
        username: 'tupac.maru',
        likes: 5,
        comentary: 'Thug Life'
    }, {
        id: 2,
        image: 'https://ichef.bbci.co.uk/news/ws/410/amz/worldservice/live/assets/images/2011/05/31/110531130056_tupac_shakur_304x171_ap_nocredit.jpg',
        username: 'tupac.maru',
        likes: 2,
        comentary: 'WEST SIDE'
    }, {
        id: 3,
        image: 'https://piks-eldesmarqueporta.netdna-ssl.com/thumbs/680/bin/2020/02/06/becky_g_portada_4jpg.jpg',
        username: 'becky g',
        likes: 10,
        comentary: 'Brillando siempre'
    }, {
        id: 4,
        image: 'https://mui.today/__export/1576007918619/sites/mui/img/2019/12/10/becky-g.jpg_1519987107.jpg',
        username: 'becky g',
        likes: 20,
        comentary: 'Probando historia'
    }]

    const renderItem = ({ item }) => (
        <Story
            image={item.image}
            username={item.username}
            likes={item.likes}
            comentary={item.comentary}
        />
    );
    return (

        <>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default Home;