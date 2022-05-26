import react from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calender from '../screens/Calender';
import DiscoverScreen from '../screens/DiscoverScreen';

const Discover = () => {
    const Drawer = createDrawerNavigator()

    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name='discover' component={DiscoverScreen}/>
            <Drawer.Screen name="Calender" component={Calender}/>
        </Drawer.Navigator>
    )
}

export default Discover