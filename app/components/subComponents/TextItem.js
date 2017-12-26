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

export default class TextItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <Text style={[styles.text]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }

    static defaultProps = {
        title: 'Team',
        text: 'Text item',
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: Colors.text_color,
        fontFamily: 'AdelleSans'
    },
    text: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'stretch',
        fontSize: 16,
        color: Colors.text_gray_color,
        // fontFamily: 'AdelleSans',
        backgroundColor: 'red'
    }
});
