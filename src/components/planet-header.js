import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native'
import Text from '../components/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetHeader = ({ BackBtn, title = "THE PLANET" }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {BackBtn && (
                <Pressable onPress={() => { navigation.goBack() }}>
                    <AntDesign style={{ marginRight: spacing[4] }} name="left" size={24} color="white" />
                </Pressable>
            )}
            <Text preset="h3" style={{ color: colors.white }}>{title}</Text>
        </View>
    )
}

export default PlanetHeader;

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        margin: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: "center"

    }
})