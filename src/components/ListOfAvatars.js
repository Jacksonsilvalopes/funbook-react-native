import { View,FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { ListHeaderComponent } from './ListHeaderComponent';
import { UserListContext } from '../context';


export const ListOfAvatars = () => {
    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={()=> console.log("hello")} >
                <Image 
                style = {{
                    height: 56, width: 56, borderRadius: 28, marginRight: 30
                }}
                source ={{
                    uri: item.url,
                }}
                
                />
            </Pressable>
        );
    }
    return (
        <UserListContext.Consumer>
            {({userList}) =>(
                 <View style={{
                    zIndex: 100,
                    paddingVertical: 30,
                    paddingLeft: 20,
                    paddingRight: 20,
                    backgroundColor: "rgba(255,255,255, 0.85)",
                }}
                >
                    <FlatList
                        data={userList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        ListHeaderComponent={<ListHeaderComponent />}
                        showsHorizontalScrollIndicator={false}
                        snpToInterval={86}
                        decelerationRate='fast'
                    />
                </View>
            )}           
        </UserListContext.Consumer>

    )
}