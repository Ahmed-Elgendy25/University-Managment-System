import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text, ScrollView } from 'react-native';
import { Center, FormControl, Select, Input, Button } from 'native-base';
import { RadioButton, Title } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import LocationsData from '../../(components)/LocationsData';
// import GetLocation from 'react-native-get-location';
import axios from 'axios';
import { getLocation, getLocationTyped } from '@/API/getLocation';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { LocationObject } from '../../(components)/professor-types';
let Locations = LocationsData;

const index = () => {
  const [selectedCampus, setSelectedCampus] = useState<string>('');
  const [selectedBuilding, setSelectedBuilding] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('Rooms');
  const [duration, setDuration] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [range, setRange] = useState<string>('');
  const [rangeFilled, setRangeFilled] = useState<boolean>(false);
  const [titleFilled, setTitleFilled] = useState<boolean>(false);
  const [durationFilled, setDurationFilled] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<LocationObject | null>(null);
  const [isDynamic, setIsDynamic] = useState<boolean>(false);

  useEffect(() => {
    const fetchLocation = async () => {
      if (selectedOption === 'Location') {
        setIsDynamic(true);
        let location = await getLocation();
        if (typeof location === 'string') {
          Alert.alert('Error', location);
        } else {
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timeStamp: moment().valueOf(),
          });
        }
      } else {
        setIsDynamic(false);
        setRange('');
      }
    };

    fetchLocation();
  }, [selectedOption]);

  const handleCampusChange = (itemValue: string) => {
    setSelectedCampus(itemValue);
    setSelectedBuilding('Choose Building');
    setSelectedRoom('Choose Room');
  };

  const handleBuildingChange = (itemValue: string) => {
    setSelectedBuilding(itemValue);
    setSelectedRoom('Choose Room');
  };

  const handleRoomChange = (itemValue: string) => {
    setSelectedRoom(itemValue);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmission = () => {
    setSubmitted(true);

    if (selectedOption === 'Rooms') {
      const isMissingFields =
        !title ||
        !selectedCampus ||
        !selectedBuilding ||
        !selectedRoom ||
        !duration ||
        selectedCampus === 'Choose Campus' ||
        selectedBuilding === 'Choose Building' ||
        selectedRoom === 'Choose Room';
      if (isMissingFields) {
        Alert.alert(
          'Error',
          'Please fill all required fields and make all selections.'
        );
        return;
      }
    } else {
      const isMissingFields = !title || !duration || !range;
      if (isMissingFields) {
        Alert.alert(
          'Error',
          'Please fill all required fields and make all selections.'
        );
        return;
      }
    }

    const formData = {
      isDynamic,
      title,
      selectedCampus,
      selectedBuilding,
      selectedRoom,
      selectedOption,
      latitude: userLocation?.latitude || 0,
      longitude: userLocation?.longitude || 0,
      duration,
      radius: range || 0,
    };

    console.log('Form data:', formData);

    axios
      .post('YOUR_BACKEND_API_ENDPOINT', formData)
      .then((response) => {
        console.log('Submission successful:', response.data);
        Alert.alert('Success', 'Data submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          Alert.alert(
            'Error',
            'An error occurred while submitting the data. Please try again.'
          );
        } else if (error.request) {
          console.error('No response received:', error.request);
          Alert.alert(
            'Error',
            'No response received from the server. Please check your network connection and try again.'
          );
        } else {
          console.error('Error setting up the request:', error.message);
          Alert.alert(
            'Error',
            'An error occurred while setting up the request. Please try again later.'
          );
        }
      });
  };

  const renderRoomSelect = () => (
    <View style={styles.locationContainer}>
      <Center>
        <FormControl w="100%" maxW="350">
          <FormControl.Label w="100%">
            <Title style={styles.title}>Choose Campus :</Title>
          </FormControl.Label>
          <Select
            selectedValue={selectedCampus}
            minWidth={200}
            accessibilityLabel="Choose Campus"
            placeholder="Choose Campus"
            onValueChange={handleCampusChange}
          >
            {Locations.map((campus) => (
              <Select.Item
                key={campus.id}
                label={campus.name}
                value={campus.name}
              />
            ))}
          </Select>
          {!selectedCampus && submitted && (
            <Text style={styles.errorText}>Campus is required</Text>
          )}
          <FormControl.Label w="100%" colorScheme="#F19A1A">
            <Title style={styles.title}>Choose Building :</Title>
          </FormControl.Label>
          <Select
            selectedValue={selectedBuilding}
            minWidth={200}
            accessibilityLabel="Choose Building"
            placeholder="Choose Building"
            onValueChange={handleBuildingChange}
          >
            {Locations.find(
              (campus) => campus.name === selectedCampus
            )?.buildings.map((building) => (
              <Select.Item
                key={building.id}
                label={building.name}
                value={building.name}
              />
            ))}
          </Select>
          {!selectedBuilding && submitted && (
            <Text style={styles.errorText}>Building is required</Text>
          )}
          <FormControl.Label w="100%" colorScheme="#F19A1A">
            <Title style={styles.title}>Choose Room :</Title>
          </FormControl.Label>
          <Select
            selectedValue={selectedRoom}
            minWidth={200}
            accessibilityLabel="Choose Room"
            placeholder="Choose Room"
            onValueChange={handleRoomChange}
          >
            {Locations.find((campus) => campus.name === selectedCampus)
              ?.buildings.find((building) => building.name === selectedBuilding)
              ?.rooms.map((room) => (
                <Select.Item
                  key={room.id}
                  label={room.name}
                  value={room.name}
                />
              ))}
          </Select>
          {!selectedRoom && submitted && (
            <Text style={styles.errorText}>Room is required</Text>
          )}
        </FormControl>
        <View style={styles.duration}>
          <Title style={styles.title}>Duration :</Title>
          <Input
            keyboardType="numeric"
            value={duration}
            placeholder="Enter duration in minutes"
            onChangeText={(text) => setDuration(text)}
            isRequired={true}
            onBlur={() => setDurationFilled(!!duration)}
          />
          {!durationFilled && submitted && (
            <Text style={styles.errorText}>Duration is required</Text>
          )}
        </View>
      </Center>
    </View>
  );

  const renderLocationMap = () => (
    <>
      <MapView style={styles.map}>
        {userLocation && (
          <Marker
            coordinate={{
              latitude: Number(userLocation.latitude),
              longitude: Number(userLocation.longitude),
            }}
          />
        )}
      </MapView>

      <View style={styles.duration}>
        <Title style={styles.title}>Duration :</Title>
        <Input
          keyboardType="numeric"
          value={duration}
          placeholder="Enter duration in minutes"
          onChangeText={(text) => setDuration(text)}
          isRequired={true}
          onBlur={() => setDurationFilled(!!duration)}
        />
        {!durationFilled && submitted && (
          <Text style={styles.errorText}>Duration is required</Text>
        )}
      </View>
      <View style={styles.range}>
        <Title style={styles.title}>Range :</Title>
        <Input
          keyboardType="numeric"
          value={range}
          placeholder="Enter range in meters"
          onChangeText={(text) => setRange(text)}
          isRequired={true}
          onBlur={() => setRangeFilled(!!range)}
        />
        {!rangeFilled && submitted && (
          <Text style={styles.errorText}>Range is required</Text>
        )}
      </View>
    </>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title style={styles.title}>Title :</Title>
        <Input
          type="text"
          value={title}
          placeholder="Enter title"
          onChangeText={(text) => setTitle(text)}
          isRequired={true}
          onBlur={() => setTitleFilled(!!title)}
        />
        {!titleFilled && submitted && (
          <Text style={styles.errorText}>Title is required</Text>
        )}
        <View style={styles.radioContainer}>
          <Title style={styles.title}>Choose Option :</Title>
          <View style={styles.radioGroup}>
            <View style={styles.radioButton}>
              <RadioButton
                value="Rooms"
                status={selectedOption === 'Rooms' ? 'checked' : 'unchecked'}
                onPress={() => handleOptionChange('Rooms')}
              />
              <Text>Rooms</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="Location"
                status={selectedOption === 'Location' ? 'checked' : 'unchecked'}
                onPress={() => handleOptionChange('Location')}
              />
              <Text>Location</Text>
            </View>
          </View>
        </View>
        {selectedOption === 'Rooms' ? renderRoomSelect() : renderLocationMap()}
        <Button
          mode="contained"
          onPress={handleSubmission}
          style={styles.submitButton}
        >
          Submit
        </Button>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'left',
    color: '#F19A1A',
    marginBottom: 10,
  },
  radioContainer: {
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 10,
  },
  locationContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  duration: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: 10,
  },
  range: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: 20,
  },
  submitContainer: {
    height: '50%',
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
  map: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
});
