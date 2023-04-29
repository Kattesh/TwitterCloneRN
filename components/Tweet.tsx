import {Image, StyleSheet, Text, View} from "react-native";
import {TweetType} from "../types";
import {Entypo, EvilIcons,} from "@expo/vector-icons";
import React from "react";


type IconButtonProps = {
    icon: React.ComponentProps<typeof EvilIcons>['name'],
    text?: number | string
}
const IconButton = ({icon, text}: IconButtonProps) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons name={icon} size={22} color='gray'/>
            <Text style={{fontSize: 12, color: 'gray'}}>{text}</Text>
        </View>
    )
}
type TweetProps = {
    tweet: TweetType
}

const Tweet = ({tweet}: TweetProps) => {
    return (
        <View style={styles.container}>
            <Image src={tweet.user.image} style={styles.userImage}/>

            <View style={styles.mainContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>{tweet.user.username} ·2h</Text>
                    <Entypo
                        name="dots-three-horizontal"
                        size={16}
                        color="gray"
                        style={{marginLeft: 'auto'}}/>
                </View>
                <Text style={styles.content}>{tweet.content}</Text>

                {tweet.image && <Image src={tweet.image} style={styles.image}/>}

                <View style={styles.footer}>
                    <IconButton icon='comment' text={tweet.numberOfComments}/>
                    <IconButton icon='retweet' text={tweet.numberOfRetweets}/>
                    <IconButton icon='heart' text={tweet.numberOfLikes}/>
                    <IconButton icon='chart' text={tweet.impressions || 0}/>
                    <IconButton icon='share-apple'/>
                </View>
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
    textContainer: {
        flexDirection: 'row',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    name: {
        fontWeight: '600'
    },
    username: {
        color: 'gray',
        marginLeft: 5,
    },
    content: {
        lineHeight: 20,
        marginTop: 5,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 10,
        borderRadius: 15,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    }
});

export default Tweet
