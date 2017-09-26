/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

const larguraTela = Dimensions.get('screen').width;

export default class InstalauraMobile extends Component {
  render() {
    const fotos = [{
      id: 1, usuario: 'lucas'
    }, {
      id: 2, usuario: 'matias'
    }, {
      id: 3, usuario: 'adams'
    }];

    return (
      <FlatList
        style={{marginTop: 20}}
        data={fotos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image
              source={require('./resources/img/cerveja01.jpg')}
              style={{width: larguraTela, height: larguraTela}}
            />
          </View>
        }
      />
    );
  }
}

AppRegistry.registerComponent('InstalauraMobile', () => InstalauraMobile);
