import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    buttonContainer: {
        margin: 10,
    },
});

export default function ListScreen() {

    const [persons, setPersons] = useState([]);

    const handleClick = () => {
        // Add new persons
        setPersons([
            { key: 'Devin' },
            { key: 'Dan' }
        ]);
    };

    return (
        <View style={styles.container}>

            <View style={styles.buttonContainer}>
                <Button title="Add Persons" onPress={handleClick} />
            </View>

            <FlatList
                data={persons}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}
