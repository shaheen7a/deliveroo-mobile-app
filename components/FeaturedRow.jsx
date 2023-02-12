import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          rating={4.5}
          genre="USA"
          address="NewYork"
          short_description="These restaurants usually offer a variety of meats, including chicken, beef, and lamb, as well as vegetarian options, and they typically have a menu that includes shawarma sandwiches, platters, salads, and sides such as hummus, baba ganoush, and rice."
          dishes={["Chicken", "Rice", "Indomie"]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japan"
          address="Damascus"
          short_description="Test description"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japan"
          address="Damascus"
          short_description="Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow