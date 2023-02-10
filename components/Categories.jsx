import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        title="Testing 1"
        imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Testing 2"
        imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Testing 3"
        imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Testing 3"
        imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Testing 3"
        imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Testing 3"
        imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Testing 3"
        imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  )
}

export default Categories