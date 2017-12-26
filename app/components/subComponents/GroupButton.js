/**
 * Created by khanhduong on 12/25/17.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class GroupButton extends Component {
    constructor(){
        super();
        this.state = {
            index: 0,
        }
    }

    render() {
        let views = [];
        if (this.props.data && this.props.data.length > 0) {
            let arrLength = this.props.data.length;
            this.props.data.forEach((item, i) => {
                let _styles = [styles.border];
                if(i == this.state.index){
                    _styles.push(styles.buttonContainerActive);
                }else{
                    _styles.push(styles.buttonContainer);
                }
                if(i == 0){
                    _styles.push(styles.borderLeft);
                }else if(i == arrLength -1){
                    _styles.push(styles.borderRight);
                    if(arrLength > 0) _styles.push({borderLeftWidth: 0.5});
                }else{
                    _styles.push(styles.borderMiddle);
                }
                views.push(
                    <TouchableOpacity key={i} style={_styles} onPress={() => {
                        this.setState({index: i});
                        this.props.onPress(i);
                    }}>
                    <Text style={[(i == this.state.index? styles.textActive : styles.text), this.props.style]}>{item}</Text>
                </TouchableOpacity>
                );
            });
        }
        return (
            <View style={styles.container}>
                {views}
            </View>
        );
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
    }

    static defaultProps = {
        data: [],
        onPress: () => {},
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainerActive: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        height: 35,
        backgroundColor: Colors.primary_color,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        height: 35,
        backgroundColor: '#f8f8f8',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textActive: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'AdelleSans',
    },
    text: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'AdelleSans',
    },
    borderLeft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderLeftWidth: 0.5,
    },
    borderRight: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderRightWidth: 0.5,
    },
    borderMiddle: {
        borderLeftWidth: 0.5,
    },
    border: {
        borderColor: '#bcbbc1',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    }
});
