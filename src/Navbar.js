import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

const NavBar = () => {
  const avatar = require('./assets/avatar.png');
  const backArrow = require('./assets/back.png');
  const moreOptions = require('./assets/more.png');

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navBarButton}>
        <Image source={backArrow} style={styles.navBarIcon} />

        <View style={styles.avatarNameContainer}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.userName}>Chris Jordan</Text>
        </View>
      </TouchableOpacity>


      <View style={styles.spacer} />

      <TouchableOpacity style={styles.moreIconBtn}>
        <Image source={moreOptions} style={styles.navBarIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  navBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  navBarIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  userName: {
    color: '#000',
    fontSize: 16,
    marginLeft:10
  },
  avatarNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  spacer: {
    flex: 1,
  },
  moreIconBtn: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default NavBar;
