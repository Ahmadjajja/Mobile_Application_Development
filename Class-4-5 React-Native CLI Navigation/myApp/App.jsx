// import {View, Text} from 'react-native';
// import React from 'react';
// import Navigation from './src/Navigation/Navigation';
// const App = () => {
//   return <Navigation />;
// };

// export default App;

// Flat-List

// import {View, Text, StyleSheet, FlatList} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: 'Devin1'},
//           {key: 'Dan1'},
//           {key: 'Dominic1'},
//           {key: 'Jackson1'},
//           {key: 'James1'},
//           {key: 'Joel1'},
//           {key: 'John1'},
//           {key: 'Jillian1'},
//           {key: 'Jimmy1'},
//           {key: 'Julie1'},
//           {key: 'Devin2'},
//           {key: 'Dan2'},
//           {key: 'Dominic2'},
//           {key: 'Jackson2'},
//           {key: 'James2'},
//           {key: 'Joel2'},
//           {key: 'John2'},
//           {key: 'Jillian2'},
//           {key: 'Jimmy2'},
//           {key: 'Julie2'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}:---</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;

// SectionList
// import {View, Text, StyleSheet, SectionList} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//           {
//             title: 'J',
//             data: [
//               'Jackson',
//               'James',
//               'Jillian',
//               'Jimmy',
//               'Joel',
//               'John',
//               'Julie',
//             ],
//           },
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({section}) => (
//           <Text style={styles.sectionHeader}>{section.title}</Text>
//         )}
//         keyExtractor={item => `basicListEntry-${item}`}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//     color: 'black',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;

import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;
