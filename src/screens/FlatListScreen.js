import React, { Component } from 'react';
import {
  AppRegistry, FlatList,
  StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity
} from 'react-native';

// const maps = [
//     { name: 'Pakistan', id: '1' },
//     { name: 'Afghanistan', id: '2' },
//     { name: 'Bahrain', id: '3' },
//     { name: 'Belgium', id: '4' },
//     { name: 'China', id: '5' },
//     { name: 'Denmark', id: '6' },
//     { name: 'Egypt', id: '7' },
//     { name: 'Finland', id: '8' },
//     { name: 'Germany', id: '9' },
//     { name: 'Hungary', id: '10' },
//     { name: 'Ireland', id: '11' },
//     { name: 'Japan', id: '12' },
//     { name: 'Kuwait', id: '13' },
//     { name: 'Libya', id: '14' },
//     { name: 'Morocco', id: '15' },
//     { name: 'Norway', id: '16' },
//     { name: 'Oman', id: '17' },
//     { name: 'Qatar', id: '18' },
//     { name: 'Russia', id: '19' },
//     { name: 'Saudi Arabia', id: '20' },
// ];

export default class FlatListScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    //headerTintColor: '#0ff',  
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#00aaff",
        }}
      />
    );
  };
  //handling onPress action  
  getListViewItem = (item) => {
    Alert.alert(item.name);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <SafeAreaView style={styles.container}>
        <FlatList
          data={[
            { name: 'Activity Indicator' },
            { name: 'Buttons' },
            { name: 'Image View' },
            { name: 'Image Background' },
            { name: 'Modal View' },
            { name: 'Pressable' },
            { name: 'Switches' },
            { name: 'Text Input' },
            { name: 'Text View'},
            { name: 'Keyboard Avoiding View'},
            { name: 'Touchable Highlight'},
            { name: 'Touchable Opacity'},
            { name: 'Touchable Native Feedback'},
            { name: 'Touchable Without Feedback'},
            { name: 'Android Drawer Layout'}
          ]}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => { navigate({ name: item.name }) }} >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
            

          }
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
  },
})

// const Item = ({ item }) => (
//     <View style={styles.item}>
//         <Text> {item} </Text>
//     </View>
// );


// return (
//     <View style={styles.container}>
//         <FlatList
//             numColumns={2}
//             keyExtractor={(item) => item.id}
//             data={maps}
//             renderItem={({ item }) => (
//                 <Text style={StyleSheet.item}>{item.name}</Text>
//             )}
//         />
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingTop: 40,
//         paddingHorizontal: 20
//     },
//     item: {
//         marginTop: 24,
//         padding: 30,
//         backgroundColor: '#00aaff',
//         fontsize: 24,
//         marginHorizontal: 10,
//         marginTop: 24,
//     }
// })

// export default Flat_List;