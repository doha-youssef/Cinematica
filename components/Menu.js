// import React from 'react';
// import { View } from 'react-native';
// import { Divider, PaperProvider, Menu } from 'react-native-paper';

// const MenuComponent = ({ closeMenu }) => {

//     return (
//         <PaperProvider>
//             <View
//                 style={{
//                     paddingTop: 50,
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     backgroundColor: 'white',
//                     borderColor: 'white',
//                     width: '50%',
//                     height: 200
//                 }}>
//                 <Menu
//                     visible={true}
//                     onDismiss={closeMenu}>
//                     <Menu.Item onPress={() => { console.warn('hii');}} title="Item 1" style={{backgroundColor: 'black'}} />
//                     <Menu.Item onPress={() => { }} title="Item 2" />
//                     <Divider />
//                     <Menu.Item onPress={() => { }} title="Item 3" />
//                     <Menu.Item onPress={() => { }} title="Item 3" />

//                 </Menu>
//             </View>
//         </PaperProvider>
//     );
// }

// export default MenuComponent;

import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;
