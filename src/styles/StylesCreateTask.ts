import { StyleSheet } from 'react-native';

const StylesCreateTask = StyleSheet.create({
  mainView: {
    width: '100%',
    flexDirection: 'row',
  },
  viewText: {
    flex: 1,
    marginRight: 10,
    marginTop: 1,
  },
  viewPlaceHolder: {
    marginBottom: 1,
  },
  closeButton: {
    backgroundColor: '#C4C7C8',
    width: '35%',
    height: 40,
    borderRadius: 100,
    alignItems: 'center', // Fixed typo: alignitems → alignItems
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#9F0001',
    width: '35%',
    height: 40,
    borderRadius: 100,
    alignItems: 'center', // Fixed typo: alignitems → alignItems
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white', // Fixed missing opening quote in 'white'
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Gotham-Bold',
  },
  closeButtonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.25,
    fontFamily: 'Gotham-Bold',
  },
});

export default StylesCreateTask;
