import React from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native'
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PlanetHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST} // puro array ta pacchi data er moddhe
                keyExtractor={(item, index) => item.name} // unique key 
                renderItem={({ item, index }) => {
                    const { name, color } = item;
                    return (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Details', { planet: item }) // default hisebe ekta naviagtion props hisebe pawa jay & planet er moddhe item gula ke pass kore dilam details page a 
                            }}
                            style={styles.item}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle, { backgroundColor: color }]} />
                                <Text preset='h4' style={styles.itemName}> {name}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="white" />
                        </Pressable>
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.sepaator} />}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: colors.black
    },
    list: {
        padding: spacing[4]
    },
    circle: {
        height: 25,
        width: 25,
        borderRadius: 13
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4]
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    sepaator: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white
    }
})