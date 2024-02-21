/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import {styles } from '../../app/Home/styles'
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../../../components/Header";
import { categories } from "../../../components/data/categories";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { products } from "../../../components/data/product";

const Home = () => {
  const [keyword, setKeyword] = useState(false);
  const [filteredProducts, setFilteredProduct] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState();
  console.log('key', keyword);
  // begin search
  useEffect(() => {
    if (selectedCategory && !keyword) {
        const updatedProducts = products.filter((product) => product?.category === selectedCategory);
        setFilteredProduct(updatedProducts);
    } else if (selectedCategory && keyword) {
        const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
        setFilteredProduct(updatedProducts); 
    } else if (!selectedCategory && keyword) {
        const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
        setFilteredProduct(updatedProducts); 
    } else if (!keyword && !selectedCategory) {
      setFilteredProduct(products);
    }
}, [selectedCategory, keyword])
  // end search
  const renderCategoryItem = ({item, index}) => {
    return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
  };
  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
      <Header showSearch onSearch={setKeyword} keyword={keyword} title="Find All You Need"
      />
      <FlatList showsHorizontalScrollIndicator={false} style={styles.list}
        horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        style={styles.productsList} numColumns={2}  data={filteredProducts} renderItem={renderProductItem} keyExtractor={item => String(item.id)} ListFooterComponent={<View style={{height: 200}} />}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);