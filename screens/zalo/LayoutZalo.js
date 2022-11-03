import {
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
// import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles/styles';

const dataAvatar = [
  {
    name: 'Wanda',
    image: require('../../assets/images/wanda.jpg'),
  },
  {
    name: 'Yasuo',
    image: require('../../assets/images/yasuo.jpg'),
  },
  {
    name: 'Captain',
    image: require('../../assets/images/captain.jpg'),
  },
  {
    name: 'Flash',
    image: require('../../assets/images/flash.jpg'),
  },
  {
    name: 'Black Widow',
    image: require('../../assets/images/blackwidow.jpeg'),
  },
  {
    name: 'Iron Man',
    image: require('../../assets/images/ironman.jpeg'),
  },
  {
    name: 'Spider Man',
    image: require('../../assets/images/spiderman.jpeg'),
  },
  {
    name: 'Strange',
    image: require('../../assets/images/strange.jpg'),
  },
  {
    name: 'Supergirl',
    image: require('../../assets/images/supergirl.jpg'),
  },
  {
    name: 'Wonder Woman',
    image: require('../../assets/images/wonderwoman.jpg'),
  },
];

const dataFriendsMayKnow = [
  {
    name: 'Natasha',
    image: require('../../assets/images/wanda.jpg'),
    mutualFriends: 15,
  },
  {
    name: 'Michael',
    image: require('../../assets/images/yasuo.jpg'),
    mutualFriends: 15,
  },
  {
    name: 'Kayla',
    image: require('../../assets/images/captain.jpg'),
    mutualFriends: 15,
  },
  {
    name: 'Kevin',
    image: require('../../assets/images/flash.jpg'),
    mutualFriends: 15,
  },
  {
    name: 'Emily',
    image: require('../../assets/images/blackwidow.jpeg'),
    mutualFriends: 15,
  },
  {
    name: 'Jack',
    image: require('../../assets/images/ironman.jpeg'),
    mutualFriends: 15,
  },
  {
    name: 'Charles',
    image: require('../../assets/images/spiderman.jpeg'),
    mutualFriends: 15,
  },
  {
    name: 'Strange',
    image: require('../../assets/images/strange.jpg'),
    mutualFriends: 15,
  },
  {
    name: 'Diana',
    image: require('../../assets/images/supergirl.jpg'),
    mutualFriends: 15,
  },
  {
    name: 'Nicole',
    image: require('../../assets/images/wonderwoman.jpg'),
    mutualFriends: 15,
  },
];

export default class LayoutZalo extends Component {
  _renderAvatar = () => {
    return dataAvatar.map((avatar, index) => {
      return (
        <View key={index} style={styles.avatarItem}>
          <Image style={styles.avatar} source={avatar.image} />
          <Text style={styles.avatarName}>{avatar.name}</Text>
        </View>
      );
    });
  };

  _renderFriendData = friend => {
    console.log(friend);
    return (
      <View style={styles.friendListContainer}>
        <View style={styles.friendItemContainer}>
          <Image
            style={[styles.avatar, {marginHorizontal: 10}]}
            source={friend.item.image}
          />
          <View>
            <View>
              <Text style={{fontWeight: 'bold'}}>{friend.item.name}</Text>
              <Text>{friend.item.mutualFriends} mutual friends</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonAddFriend}>
            <Text style={styles.buttonText}>Add Friend</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.recentSearchHeader}>
          {/* <Entypo name="back-in-time" size={30} color="#900" /> */}
          <Text style={styles.headerText}>Recent Search List</Text>
        </View>
        <ScrollView
          style={styles.avatarContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={true}>
          {this._renderAvatar()}
        </ScrollView>
        <View style={styles.friendListHeader}>
          {/* <Entypo name="users" size={30} color="#900" /> */}
          <Text style={styles.headerText}>People You May Know</Text>
        </View>
        <FlatList
          data={dataFriendsMayKnow}
          renderItem={data => {
            return this._renderFriendData(data);
          }}
        />
      </View>
    );
  }
}
