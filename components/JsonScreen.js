import React from 'react';
import { StyleSheet, Text, View , Picker, TextInput, Switch} from 'react-native';

data = {
    title:'Form 1',
    fields:[
        {
            type:'picker',
            name:'Numbers',
            options:['1','2','3'],
        },
        {
            type:'text',
            name:'Name',
        },
        {
            type:'switch',
            name:'Agree',
        },
        {
            type:'other',
            name:'Other text'
        }
    ]
}

export default class JsonScreen extends React.Component {
  static navigationOptions = {
    title: 'Json',
  };
  readFormFromJson(data) {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        {data.fields.map((field, i) => {
            switch(field.type) {
                case 'picker':
                    return (
                        <View key={i}>
                            <Text>{field.name}</Text>
                            <Picker>
                                {field.options.map((option, j) => {
                                    return (
                                        <Picker.Item key={j} label={option} value={j}/>
                                    )
                                })}
                            </Picker>
                        </View>
                    );
                case 'text':
                    return (
                        <View key={i}>
                            <Text>{field.name}</Text>
                            <TextInput style={{height:40, width:500,}}/>
                        </View>
                    );
                case 'switch':
                    return (
                        <View key={i}>
                            <Text>{field.name}</Text>
                            <Switch onValueChange={(newValue) => this.setState({value: newValue})}/>
                        </View>
                    );
                default:
                    return (
                        <Text key={i}>{field.name}</Text>
                    )
            }
        })}
    </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
          {this.readFormFromJson(data)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 50,
  },
});
