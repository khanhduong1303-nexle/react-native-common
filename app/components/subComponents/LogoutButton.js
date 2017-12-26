/**
 * Created by khanhduong on 12/25/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class LogoutButton extends Component {
    render() {
        let props = {...this.props};
        delete props.style;
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} {...props}>
                <Text style={[styles.text, this.props.style]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    static defaultProps = {
        text: 'LogOut',
        onPress: () => {},
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 24,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: Colors.primary_color,
        fontFamily: 'AdelleSans-Bold'
    }
});
