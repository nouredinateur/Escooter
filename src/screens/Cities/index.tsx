import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';
import {FlashList} from '@shopify/flash-list';

const APY_KEY = '62e354ca604253c43915eb3bc7656c2252621e5e';
const CITY = 'Lyon';

// TODO: LIST THE CONTRACTS IN THE SCREEN FIRST

const Cities = () => {

   const {isLoading, isError, data, error} = useQuery('contracts', async () => {
     const response = await fetch(
       `https://api.jcdecaux.com/vls/v1/contracts&apiKey=${APY_KEY}`,
     );
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   });

   if(isLoading){
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
   }

   if(error){
    return (
      <View>
        <Text>Oops Error</Text>
      </View>
    );
   }
   console.log("CONTRACT: ",data)
  return (
    <FlashList
      data={data}
      renderItem={({item}) => <Text>up</Text>}
      estimatedItemSize={200}
    />
  );
};
export default Cities;
