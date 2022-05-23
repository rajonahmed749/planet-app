import React from 'react'
import { View, StyleSheet } from 'react-native'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/colors'

const Details = () => {
    return (
        <View style={styles.container}>
            <PlanetHeader BackBtn={true} />
            <Text>
                This is for details
            </Text>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    }
})