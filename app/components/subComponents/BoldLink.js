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

export default class BoldLink extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Text style={[styles.text, this.props.style]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    static defaultProps = {
        text: 'Bold Link',
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: Colors.primary_color,
        fontWeight: 'bold'
    }
});
