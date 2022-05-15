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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BottomSheet } from '../../components/BottomSheet';
import { IstationState } from './types';

const APY_KEY = '62e354ca604253c43915eb3bc7656c2252621e5e';
const initialStationeState: IstationState = {}
const Map = () => {
    const [data, setData] = useState<any>([]);
    const [visible, setVisible] = useState(false);
    const [station, setStation] = useState(initialStationeState)

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
                mapType={'standard'}
                initialRegion={{
                    latitude: 45.763420,
                    longitude: 4.834277,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {data?.map((station: any, index: any) => (
                    <Marker
                        key={station.number}
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
                <View style={styles.BottomSheet}>
                    <View style={styles.nameCard}>
                        <View>
                            <Text style={{ color: '#efefef', fontWeight: '700', fontSize: 14 }}>{station.name}</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={{ color: '#f48128', fontSize: 16, fontWeight: '700', paddingRight: 4 }}>{station.contract_name}</Text>
                                <Text style={{ color: '#d8d8d8', fontSize: 12, width: 260, paddingVertical: 4 }}>{station.address}</Text>
                            </View>
                        </View>
                        {station.status === "OPEN" ?
                            <View style={styles.iconHolder}>
                                <Text style={{ color: '#52b95f', fontSize: 12 }}>{station.status}</Text>
                                <FontAwesome5 name='door-open' color={'#52b95f'} size={16} />
                            </View> :
                            <View style={styles.iconHolder}>
                                <Text style={{ color: 'red', fontSize: 12 }}>{station.status}</Text>
                                <FontAwesome5 name='door-closed' color={"red"} size={16} />
                            </View>}
                    </View>
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 20, borderBottomColor: '#131636', borderBottomWidth: 2 }}>
                                <MaterialCommunityIcons name='bike' style={{ paddingHorizontal: 16 }} color={"#f48128"} size={35} />
                                <Text style={{ color: '#f48128', fontSize: 16, paddingVertical: 8 }}>{station.available_bikes} available bikes</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 20, borderBottomColor: '#131636', borderBottomWidth: 2 }}>
                                <MaterialCommunityIcons name='bike' style={{ paddingHorizontal: 16 }} color={"#131636"} size={35} />
                                <Text style={{ color: '#131636', fontSize: 16, paddingVertical: 8 }}>has {station.bike_stands} spots</Text>
                            </View>
                            {/* <JSONTree data={station} /> */}
                        </View>
                    </View>
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
    BottomSheet: {
        width: '100%',
        height: 226,
        backgroundColor: '#efefef',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    nameCard: {
        flexDirection: 'row',
        padding: 16,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#131636',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    iconHolder: {
        flexDirection: 'row', width: 54, justifyContent: 'space-between', alignItems: 'center'
    }
});
export default Map