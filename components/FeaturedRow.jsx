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
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"
          title="KFC"
          rating={4.3}
          genre="USA"
          address="NewYork"
          short_description="Chicken made using a secret blend of 11 herbs and spices. In addition to fried chicken, KFC also offers a variety of menu items, including sandwiches, sides, and desserts."
          dishes={[{
            id: 3,
            name: "Chizza",
            price: 10,
            description: "Chicken Pizza",
            img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-K754.jpg?ver=25.1"
          }, {
            id: 4,
            name: "Peri Peri 10 Strips",
            price: 15,
            description: "Chicken Strips",
            img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002153.jpg?ver=25.1"
          }, {
            id: 5,
            name: "Stay Home Bucket",
            price: 35,
            description: "Bucket of Strips",
            img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002169.jpg?ver=25.1"
          }]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={2}
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1a/02/73/69/station1-chicken-shawarma.jpg"
          title="Syrian Shawarma"
          rating={4.8}
          genre="Syria"
          address="Damascus"
          short_description="Shawarma is a popular Middle Eastern dish consisting of marinated meat (such as chicken, beef, or lamb) that is slow-cooked on a spit and then thinly sliced. The meat is served in a pita bread or wrap with various toppings such as veggies, sauces, and spreads."
          dishes={[{
            id: 6,
            name: "Shawarma Sandwich",
            price: 7,
            description: "Chicken Shawarma Sandwich",
            img: "https://72sandwiches.com/wp-content/uploads/2020/09/meat-shawarma.jpg"
          }, {
            id: 7,
            name: "Shawarma Arabian",
            price: 10,
            description: "Chicken Shawarma plate",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/16/ee/10/e2/chicken-shawarma-with.jpg"
          }, {
            id: 8,
            name: "Syrian Toast",
            price: 3,
            description: "Chicken Shawarma Sandwich regular",
            img: "https://www.alphafoodie.com/wp-content/uploads/2021/11/Chicken-shawarma-Square.jpeg"
          }]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={3}
          imgUrl="https://static.india.com/wp-content/uploads/2016/09/dominos.jpg?impolicy=Medium_Resize&w=1200&h=800"
          title="Dominos"
          rating={4.1}
          genre="Canada"
          address="Montreal"
          short_description="Domino's is a well-known international chain of pizza restaurants. It was founded in 1960 and has since grown to become one of the largest pizza chains in the world. Domino's offers a variety of pizza toppings, as well as sides such as breadsticks, wings, and salads."
          dishes={[{
            id: 0,
            name: "Tomato Pizza",
            price: 5,
            description: "Tomato Pizza",
            img: "https://www.dominos.co.in/blog/wp-content/uploads/2011/08/cheese-tomato.jpg"
          }, {
            id: 1,
            name: "Cheesee Pizza",
            price: 10,
            description: "Pizza with cheese",
            img: "https://www.dominos.co.in/files/items/Margherit.jpg"
          }, {
            id: 2,
            name: "Corn Pizza",
            price: 3,
            description: "Pizza with corn",
            img: "https://www.dominos.co.in//files/items/Corn_&_Cheese.jpg"
          }]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow