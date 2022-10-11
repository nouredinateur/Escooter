import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {useQuery} from 'react-query';
import MapView, {Marker} from 'react-native-maps';
import JSONTree from 'react-native-json-tree';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IstationState} from './types';
import {BottomSheet} from '../../components/BottomSheet';

const APY_KEY = '62e354ca604253c43915eb3bc7656c2252621e5e';
const initialStationeState: IstationState = {};
const CITY = 'lyon';

const Map = () => {
  const [visible, setVisible] = useState(false);
  const [station, setStation] = useState(initialStationeState);

  const {isLoading, isError, data, error} = useQuery('markers', async () => {
    const response = await fetch(
      `https://api.jcdecaux.com/vls/v1/stations?contract=${CITY}&apiKey=${APY_KEY}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  if (isLoading) {
    return (
      <ActivityIndicator
        size={'large'}
        style={{width: '100%', height: '100%'}}
      />
    );
  }

  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  return (
    <View className="flex-1 justify-end items-center w-full">
      <MapView
        className=""
        style={styles.map}
        mapType={'standard'}
        initialRegion={{
          latitude: 45.76342,
          longitude: 4.834277,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data?.map((station: any, index: any) => (
          <Marker
            key={station.number}
            coordinate={{
              latitude: station.position.lat,
              longitude: station.position.lng,
            }}
            title={station.name}
            onPress={() => {
              setVisible(!visible);
              setStation(station);
            }}
          />
        ))}
      </MapView>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}>
        <View className="mt-6 w-full h-2/6 bg-[#efefef] rounded-tr-xl rounded-tl-xl">
          <View className="flex-row w-full justify-between py-3 px-4 bg-[#131636] rounded-tr-lg rounded-tl-lg shadow-lg">
            <View>
              <Text className="text-[#efefef] font-semibold text-base">
                {station.name}
              </Text>
              <View className="flex-row">
                <Text className="text-[#f48128] text-base font-semibold pr-1">
                  {station.contract_name}
                </Text>
                <Text
                  className="text-[#d8d8d8] text-sm w-auto py-1">
                  {station.address}
                </Text>
              </View>
            </View>
            {station.status === 'OPEN' ? (
              <View>
                <Text className='text-[#52b95f] text-sm'>
                  {station.status}
                </Text>
                <FontAwesome5 name="door-open" color={'#52b95f'} size={16} />
              </View>
            ) : (
              <View className="flex-row w-12 justify-between items-center">
                <Text className='text-red-500 text-sm'>
                  {station.status}
                </Text>
                <FontAwesome5 name="door-closed" color={'red'} size={16} />
              </View>
            )}
          </View>
          <View>
            <View>
              <View className="flex-row bg-white py-6 border-b-[#131636] border-b-2">
                <MaterialCommunityIcons
                  name="bike"
                  style={{paddingHorizontal: 16}}
                  color={'#f48128'}
                  size={35}
                />
                <Text className="text-[#f48128] text-base py-1">
                  {station.available_bikes} available bikes
                </Text>
              </View>
              <View className="flex-row py-6 first-letter:bg-white border-b-[#131636] border-b-2">
                <MaterialCommunityIcons
                  name="bike"
                  style={{paddingHorizontal: 16}}
                  color={'#131636'}
                  size={35}
                />
                <Text className="text-[#131636] text-base py-1">
                  has {station.bike_stands} spots
                </Text>
              </View>
              {/* <JSONTree data={station} /> */}
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
});
export default Map;
