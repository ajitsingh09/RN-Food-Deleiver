import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Catogories = () => {
    const img="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMDIwMHgyMDB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
  return (
    <ScrollView
      horizontal
      contentContainerStyle={
        {
          paddingHorizontal:16,
          paddingTop:10,
        }
      }
      showsHorizontalScrollIndicator={false}
      >
      <CategoryCard imgUrl={img} title="Testing 1"/>
      <CategoryCard imgUrl={img} title="Testing 2"/>
      <CategoryCard imgUrl={img} title="Testing 3"/>
      <CategoryCard imgUrl={img} title="Testing 4"/>
      <CategoryCard imgUrl={img} title="Testing 2"/>
      <CategoryCard imgUrl={img} title="Testing 3"/>
      <CategoryCard imgUrl={img} title="Testing 4"/>
    
    </ScrollView>
  );
};

export default Catogories;
