/**
 * Created by khanhduong on 12/25/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';
import Images from '../../themes/Images';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class LargeFilterButton extends Component {
    render() {
        let props = {...this.props};
        delete props.style;
        return (
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} {...props}>
                <Text style={[styles.text, this.props.style]}>{this.props.text}</Text>
                <Image source={Images.arrow} style={{marginLeft: 5}}/>
            </TouchableOpacity>
        );
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    static defaultProps = {
        text: 'Large Filter Button',
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'AdelleSans-SemiBold'
    }
});
