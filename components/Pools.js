'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;
let pools = [
  {
    "name": "Álftaneslaug",
    "id": "ALF",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "17:00"
    }
  },
  {
    "name": "Árbæjarlaug",
    "id": "ARB",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Ásgarðslaug Garðabæ",
    "id": "ASG",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Ásvallalaug",
    "id": "ASV",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "17:00"
    }
  },
  {
    "name": "Breiðholtslaug",
    "id": "BRE",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Grafarvogslaug",
    "id": "GRA",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Klébergslaug",
    "id": "KLE",
    "today": {
      "date": "25.10.2015",
      "opens": "11:00",
      "closes": "15:00"
    }
  },
  {
    "name": "Lágafellslaug",
    "id": "LAG",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "19:00"
    }
  },
  {
    "name": "Laugardalslaug",
    "id": "LAU",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "22:00"
    }
  },
  {
    "name": "Salalaug",
    "id": "SAL",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Seltjarnarneslaug",
    "id": "SEL",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "19:00"
    }
  },
  {
    "name": "Sundhöll Hafnarfjarðar",
    "id": "SHF",
    "today": "null"
  },
  {
    "name": "Sundhöll Reykjavíkur",
    "id": "SRE",
    "today": {
      "date": "25.10.2015",
      "opens": "10:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Sundlaug Kópavogs",
    "id": "SKO",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "18:00"
    }
  },
  {
    "name": "Suðurbæjarlaug",
    "id": "SUD",
    "today": {
      "date": "25.10.2015",
      "opens": "8:00",
      "closes": "17:00"
    }
  },
  {
    "name": "Varmárlaug",
    "id": "VAR",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "16:00"
    }
  },
  {
    "name": "Vesturbæjarlaug",
    "id": "VES",
    "today": {
      "date": "25.10.2015",
      "opens": "9:00",
      "closes": "18:00"
    }
  }
];
class Pools extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(pools),
    };
  }
  render() {
      // {pools.map((pool) => {
          // 
      // })}
    return (
      <View style={styles.container2}>
         <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <Image
              style={styles.pool}
              source={{uri: 'https://c2.staticflickr.com/4/3112/2841847644_565dab62cb.jpg'}}>
              <Text>{rowData.name}</Text>
            </Image>
            )}
        />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  pool: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 200,
    borderBottomWidth: 2,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = Pools;