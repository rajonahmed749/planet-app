import React from 'react'
import { View, StyleSheet, ScrollView, Image ,Pressable} from 'react-native';
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { earthPic, jupiterPic, marsPic, mercuryPic, neptunePic, saturnPic, uranusPic, venusPic } from '../svg';
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing';

const Details = ({ navigation, route }) => {
    const planet = route.params.planet;
    console.log("THe planet list =--> ", planet);
    const { name, description } = planet;

    // const renderImage = (name) => {
    //     switch (name) {
    //         case 'mercury':
    //             return < Image style={styles.planetImage} source={require(venusPic)} />;
    //         case 'venus':
    //             return < Image style={styles.planetImage} source={require(venusPic)} />;
    //         case 'earth':
    //             return < Image style={styles.planetImage} source={require(earthPic)} />;
    //         case 'mars':
    //             return < Image style={styles.planetImage} source={require(marsPic)} />;
    //         case 'jupiter':
    //             return < Image style={styles.planetImage} source={require(jupiterPic)} />;
    //         case 'saturn':
    //             return < Image style={styles.planetImage} source={require(saturnPic)} />;
    //         case 'uranus':
    //             return < Image style={styles.planetImage} source={require(uranusPic)} />;
    //         case 'neptune':
    //             return < Image style={styles.planetImage} source={require(neptunePic)} />;
    //     }
    // }
    return (
        <View style={styles.container}>
            <PlanetHeader BackBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {/* {renderImage(name)} */}
                    <Text preset='h3'> There will be an image for -- {name.toUpperCase()}</Text>
                </View>
                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.name}> {name}</Text>
                    <Text preset='small' style={styles.description}> {description}</Text>
                    <Pressable style={styles.source}>
                        <Text preset='small'>Source: </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>
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
    description:{
        marginTop:spacing[5],
        textAlign:'center',
        lineHeight: 25
    },
    source:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: spacing[4]
    },
    wikipedia:{
        textDecorationLine: 'underline',
        fontWeight:'bold'
    }
})