'use strict';
import App from './app';
import NavigationBar from 'react-native-navbar';
import React, {Component} from 'react';
import {View, Navigator, StyleSheet} from 'react-native';

export class Navigation extends Component {
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    const titleConfig = {
      title: 'React Native Alt Demo',
      tintColor: 'white'
    };

    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          navigationBar: <NavigationBar title={titleConfig} />
        }}
      />
    );
  }

  renderScene(route, navigator) {
    let Component = route.component;
    let navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        style: styles.navColor,
        titleColor: 'white',
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.appContainer}>
        {navBar}
        <Component
          navigator={navigator}
          route={route}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  navColor: {
    'backgroundColor': '#3B5998'
  },
  appContainer: {
    flex: 1,
    backgroundColor: 'white'
  }
});

