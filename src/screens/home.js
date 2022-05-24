import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable, TextInput } from 'react-native'
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const [list, setList] = useState(PLANET_LIST)

    // search input gula input kortesi ei function er maddhome 
    const searchFilter = (text) => {
        const filterdList = PLANET_LIST.filter((item) => {
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();
            return itemName.indexOf(userTypedText) > -1;
        });
        setList(filterdList)
        console.log('filterd list', filterdList)
    }
    return (
        <View style={styles.container}>
            <PlanetHeader />

            <TextInput
                placeholder='Type the planet name'
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
                onChangeText={(text) => { searchFilter(text) }}
            />

            <FlatList
                contentContainerStyle={styles.list}
                data={list} // puro array ta pacchi data er moddhe
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
        backgroundColor: colors.black,
        height: 900
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
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5]
    }
})