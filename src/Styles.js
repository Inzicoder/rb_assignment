import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: 'FFFFFF',
  },
  msgSecondaryContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    width: '70%',
  },
  msgSubContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
    fontWeight: '400',
  },
  timestampText: {
    fontSize: 12,
    color: '#CACACA',
  },
  flatList: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#edf7fc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    marginTop: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  sendIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
    top: -10,
  },
  msgPrimaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  tick: {
    width: 20,
    height: 20,
  },
});

export default styles;
