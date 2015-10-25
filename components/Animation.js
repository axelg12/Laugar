var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
} = React;
var {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');
var ANIMATION_END_Y = Math.ceil(deviceHeight * .5);
var NEGATIVE_END_Y = ANIMATION_END_Y * -1;

class Animation extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
    };
  }
  render(): ReactElement {
    return (
      <Animated.Image                         // Base: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={[{
          flex: 1,
          transform: [                        // `transform` is an ordered array
            {scale: '0.5'},  // Map `bounceValue` to `scale`
          ]
        },this.getHeartAnimationStyle()]}
      />
    );
  }
  componentWillMount() {
    this._rotateAnimation = this.state.position.interpolate({
      inputRange: [-360, 0, 90, 180, 270, 360],
      outputRange: ['360deg','0deg', '90deg', '180deg', '270deg', '360deg']
    });
  }
  componentDidMount() {
    this.startAnimation();
  }
  startAnimation() {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: 360
    }).start(() => {
      this.setState({position: new Animated.Value(0)});
      this.startAnimation();
    });
  }
  getHeartAnimationStyle() {
    return {
      transform: [
        {rotate: this._rotateAnimation},
      ]
    }
  }
}
module.exports = Animation;