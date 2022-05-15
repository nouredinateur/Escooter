import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import JSONTree from 'react-native-json-tree';
import { BottomSheet } from '../../components/BottomSheet';

const APY_KEY = '62e354ca604253c43915eb3bc7656c2252621e5e';



const Map = () => {
    const [data, setData] = useState<IstationState>([]);
    const [visible, setVisible] = useState(false);
    const [station, setStation] = useState<any[]>([])

    useEffect(() => {
        fetchStations()
    }, [])
    const fetchStations = async () => {
        try {
            const response = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=${APY_KEY}`)
            const result = await response.json()
            setData(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    const toggleBottomSheet = () => {
        setVisible(!visible)
    }
    return (
        <>
            <MapView
                style={styles.map}
                mapType={'hybrid'}
                initialRegion={{
                    latitude: 45.763420,
                    longitude: 4.834277,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {data?.map((station: any, index: any) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: station.position.lat, longitude: station.position.lng }}
                        title={station.name}
                        onPress={() => {
                            setVisible(!visible)
                            setStation(station)
                        }}
                    />)
                )}
            </MapView>
            <BottomSheet
                visible={visible}
                onBackButtonPress={toggleBottomSheet}
                onBackdropPress={toggleBottomSheet}
            >
                <View style={{ width: '100%', height: 300, backgroundColor: 'white' }}>
                    <Text style={{ color: 'black' }}>{station.name}</Text>
                </View>
            </BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default Map