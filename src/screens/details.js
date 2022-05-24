import React from 'react'
import { View, StyleSheet, ScrollView, Image, Pressable, Linking } from 'react-native';
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { earthPic, jupiterPic, marsPic, mercuryPic, neptunePic, saturnPic, uranusPic, venusPic } from '../svg';
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing';


const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTranform: 'uppercase' }}>{title}</Text>
            <Text preset='h3' >{value}</Text>
        </View>
    )
}



const Details = ({ route }) => {
    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const RenderImage = () => {
        switch (name) {
            case 'mercury':
                return < Image style={styles.planetImg} source={require('../svg/mercury.png')} />;
            case 'venus':
                return < Image style={styles.planetImg} source={require('../svg/venus.png')} />;
            case 'earth':
                return < Image style={styles.planetImg} source={require('../svg/earth.png')} />;
            case 'mars':
                return < Image style={styles.planetImg} source={require('../svg/mars.png')} />;
            case 'jupiter':
                return < Image style={styles.planetImg} source={require('../svg/jupiter.png')} />;
            case 'saturn':
                return < Image style={styles.planetImg} source={require('../svg/saturn.png')} />;
            case 'uranus':
                return < Image style={styles.planetImg} source={require('../svg/uranus.png')} />;
            case 'neptune':
                return < Image style={styles.planetImg} source={require('../svg/neptune.png')} />;
        }
    }

    const onPressLink = () => {
        Linking.openURL(wikiLink)
    }
    return (
        <View style={styles.container}>
            <PlanetHeader BackBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {RenderImage(name)}
                    {/* jodi ami svg gula ke component a convert kortam */}
                    {/* <Image
                        style={styles.planetImg}
                        source={require('../svg/earth.png')}
                    /> */}
                </View>

                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.name}> {name}</Text>
                    <Text preset='small' style={styles.description}> {description}</Text>
                    <Pressable style={styles.source} onPress={onPressLink}>
                        <Text preset='small'>Source: </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />
                <PlanetSection title='ROTATION TIME' value={rotationTime} />
                <PlanetSection title='REVOLUTION TIME' value={revolutionTime} />
                <PlanetSection title='RADIUS' value={radius} />
                <PlanetSection title='AVG TEMP.' value={avgTemp} />
            </ScrollView>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageView: {
        marginTop: spacing[5],
        padding: spacing[5],
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: 'center'
    },
    name: {
        textTransform: 'uppercase'
    },
    description: {
        marginTop: spacing[5],
        textAlign: 'center',
        lineHeight: 25
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing[4]
    },
    wikipedia: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.darkGrey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
    },
    planetImg: {
        height: 200,
        width: 200
    }
})