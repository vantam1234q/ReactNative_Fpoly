/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import { products } from '../../../components/data/product';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
import Header from '../../../components/Header';
import { categories } from '../../../components/data/categories';


const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('DetailProduct', {product});
    };

    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header
        showSearch
        onSearch={setKeyword}
        keyword={keyword}
        title="Find All You Need"
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />

      <FlatList
        style={styles.productsList}
        numColumns={2}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);