
import React, { useCallback, useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { requestBase } from "../utils/constants"
import { Cards } from './Cards';
import AppLoading from "expo-app-loading";


export const ListOfCards = () => {
  const [cardList, setCardList] = useState(null);

  async function fetchCardData() {
    const response = await fetch(requestBase + "/home.json");
    setCardList(await response.json());
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  if (!cardList) {
    return <AppLoading />;
  }
  const renderItem = ({ item }) => {
    return <Cards item ={item} />;
  };

  return (
    <View
      style={{
        marginTop: -200,
        paddingHorizontal: 20,
        marginBottom: 160,
      }}
    >
      <FlatList
        data={cardList.reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{ height: 200 }} />}
        snapToInterval={312}
        decelerationRate='fast'
      />
    </View>
  )
}