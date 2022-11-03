import {AppRegistry} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('ATSPinak', () => App);

AppRegistry.runApplication('ATSPinak', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
