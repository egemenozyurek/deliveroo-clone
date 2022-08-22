import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();
  
    // const [featuredCategories, setFeaturedCategories] = useState([]);
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    // useEffect(() => {
    //   sanityClient
    //     .fetch(
    //       `
    //     *[_type == 'featured']{
    //       ...,
    //       restaurants[]->{
    //         ...,
    //         dishes[]->
    //       }
    //     }
    //     `
    //     )
    //     .then((data) => {
    //       setFeaturedCategories(data);
    //     });
    // }, []);
  
    // console.log(featuredCategories);
  
    return (
      <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "http://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
  
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>
  
          <UserIcon size={30} color="#00ccbb" />
        </View>
  
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
  
          <AdjustmentsIcon color="#00ccbb" />
        </View>
  
        {/* Body */}
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Categories */}
          <Categories />
  
          {/* Featured rows */}
          {/* // {featuredCategories?.map((category) => ( */}
            <FeaturedRow
              id="123"
              title="Featured"
              description="Paid Placements from our partners"
            />
            <FeaturedRow
              id="1234"
              title="Tasty Discounts"
              description="Everyone's been enjoying these juicy discounts"
            />
            <FeaturedRow
              id="12345"
              title="Offers Near You"
              description="Why not support your local restaurant tonight !"
            />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;