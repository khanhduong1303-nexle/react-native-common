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
} from 'react-native';

export default class SmallHeading extends Component {
    render() {
        return (
            <Text style={[styles.container, this.props.style]}>
                {this.props.text}
            </Text>
        );
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    static defaultProps = {
        text: 'Smaller heading',
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 17,
        color: Colors.text_color,
        fontFamily: 'AdelleSans-Bold'
    }
});
