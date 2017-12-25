/**
 * Created by khanhduong on 12/25/17.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Text extends Component<{}> {
    render() {
        return (
            <Text style={styles.container}>
                Welcome to React Native Elements components! This is Text component
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
