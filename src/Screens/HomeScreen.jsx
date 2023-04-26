import React, {useLayoutEffect} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Catogories from '../components/Catogories';
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" pt-3">
      {/*-----------------Header-----------------*/}
      <View className="bg-white">
        <View className="flex-row mx-2   space-x-2 items-center mb-2">
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=2000',
            }}
            className="bg-gray-300 rounded-full w-10 h-10"
          />
          <View className="flex-1">
            <Text className="text-gray-500  text-xs">Deliever Now!</Text>
            <View className="flex flex-row items-end">
              <Text className="font-extrabold text-black text-xl ">
                Current Location
              </Text>
              <MaterialCommunityIcons
                name="chevron-down"
                color="#00CCBB"
                size={27}
                style={{backgroundColor: 'transparent'}}
              />
            </View>
          </View>
          <FontAwesomeIcon
            name="user-o"
            color="#00CCBB"
            size={30}
            style={{backgroundColor: 'transparent'}}
          />
        </View>
        {/* Search Box */}
        <View className="flex flex-row items-center space-x-2 mx-2 pb-2">
          <View className="flex flex-row items-center bg-gray-200 px-3 flex-1 space-x-2 ">
            <FontAwesomeIcon name="search" size={20} color="grey" />
            <TextInput
              placeholder="Search for a restaurant or a dish"
              keyboardType="default"
            />
          </View>
          <FontAwesomeIcon name="sliders" size={30} color="#00CCBB" />
        </View>
      </View>
      {/*|-----------------Body-----------------|*/}
      <ScrollView className="">
      {/*|-----------------Categories-----------------|*/}
        <Catogories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
