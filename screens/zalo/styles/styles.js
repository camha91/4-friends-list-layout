import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  recentSearchHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: Platform.OS === 'ios' ? 100 : 56,
    paddingTop: Platform.OS === 'ios' ? 64 : 0,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  avatarContainer: {
    borderBottomColor: '#EBECF0',
    borderBottomWidth: 1,
    paddingBottom: 35,
  },
  avatarItem: {
    paddingHorizontal: 12,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    padding: 10,
  },
  avatarName: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  friendListHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  friendListContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  friendItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#BEBEBE',
    borderRadius: 8,
    margin: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonAddFriend: {
    backgroundColor: '#ccccff',
    borderRadius: 20,
    padding: 12,
    marginLeft: 45,
  },
  buttonText: {
    fontSize: 12,
  },
});

export default styles;
