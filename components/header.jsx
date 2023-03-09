
import {Text, View, StyleSheet} from "react-native"

export default function Header (){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 20,
        backgroundColor: "crimson",
    },
    title: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",

    }
})