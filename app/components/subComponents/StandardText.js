/**
 * Created by khanhduong on 12/25/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Colors from '../../themes/Colors';

export default class StandardText extends Component {
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
        text: 'Standard text paragraph lorem ipsum.',
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 14,
        color: Colors.text_color,
        fontFamily: 'AdelleSans'
    }
});
