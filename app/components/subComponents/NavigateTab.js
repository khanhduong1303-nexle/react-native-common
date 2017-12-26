/**
 * Created by khanhduong on 12/25/17.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';
import Images from '../../themes/Images';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class NavigateTab extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }

    render() {
        let views = [];
        if (this.props.data && this.props.data.length > 0) {
            this.props.data.forEach((item, i) => {
                views.push(
                    <TouchableOpacity key={i} style={styles.tabContainer} onPress={() => {
                        this.setState({index: i});
                        this.props.onPress(i);
                    }}>
                        <Image source={(i == this.state.index ? item.active : item.normal)} resizeMode={Image.resizeMode.contain} tinColor="red"/>
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
        data: [
            {
                normal: Images.today,
                active: Images.todayActive,
            },
            {
                normal: Images.contacts,
                active: Images.contactsActive,
            },
            {
                normal: Images.profile,
                active: Images.profileActive,
            }
        ],
        onPress: () => {
        },
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#dfdfdf'
    },
    tabContainer: {
        flex: 1,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 27,
        width: 27,
        backgroundColor: 'red'
    }
});
