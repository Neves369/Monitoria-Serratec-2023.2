import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Person from "../screens/Person";
import Home from "../screens/Home";

const AppStack = createNativeStackNavigator();

const AppRoutes =()=>{
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Person" component={Person} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;