import {Image, StyleSheet, Text, View} from "react-native";


const Tweet = ({tweet}:any) => {
    return (
        <View style={styles.container}>
            <Image src={tweet.user.image} style={styles.userImage}/>
            <View style={styles.mainContainer}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.content}>{tweet.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
    },
    mainContainer: {
        marginLeft: 10,
        flex: 1,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    name: {
        fontWeight: '600'
    },
    content: {
        lineHeight: 20,
        marginTop: 5,
    }
});

export default Tweet