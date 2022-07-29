import {Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';

export class Touchable_Highlight extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableHighlight
          activeOpacity={0}
          underlayColor="#003366"
          onPress={() => alert('Touchable Highlight is Pressed!')}>
            <View style={{backgroundColor: '#00aaff'}}>
                <Text style={{color: '#00ff00', padding: 50}}>
                    Touchable Highlight
                </Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
}

export default Touchable_Highlight;
