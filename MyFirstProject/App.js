import React, { useState } from 'react';
import { Button, Text, View,ScrollView,StyleSheet,Image, TextInput,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>EVOLUCIÓN DE LOS TELÉFONOS MÓVILES</Text>
        <Text style={styles.title}>1996-2009</Text>

        <Text style={styles.numero}>1.- NOKIA 2146 (año 1996)</Text>
        <Text style={styles.text}>En la década de los 90, se hizo popular un teléfono muy diferente a sus predecesores.
         El Nokia 2146 pesaba sólo 235 gramos y medía 14,8 centímetros de longitud</Text>
         <Image style={styles.imagen} source ={{uri:'https://www.informaticadirecto.com/blog/wp-content/uploads/2017/12/Nokia-2146.jpg',}}/>
         <Text style={styles.numero}>2.- Sharp J. sh04 (año 2000)</Text>
        <Text style={styles.text}>En el año 2000 salió a la venta el primer teléfono móvil de Sharp con cámara, diseñado exclusivamente para Japón.
           El J-SH04 contaba con un dispositivo de imagen CMOS todo-en-uno y tenía una resolución de 0,1 megapíxeles, 
          pero podía almacenar hasta 500 números o acceso a la web en su batería de litio, ¡que soportaba 125 minutos de tiempo de conversación!</Text>
          <Image style={styles.imagen} source ={{uri:'https://www.informaticadirecto.com/blog/wp-content/uploads/2017/12/Sharp-J.-sh04.jpg',}}/>
        <Text style={styles.numero}>3.- Motorola RAZR V3 (año 2004)</Text>
        <Text style={styles.text}>El diseño elegante y delgado de este teléfono es algo que lo hace destacar.
         El marco de aluminio anodizado de la era espacial y su dispositivo abierto en forma de concha con teclado alpino son también características que merece la pena destacar 
         en detalle por su durabilidad, así como por sus puntos de estilo La disposición plana de las teclas, combinada con los números electroluminiscentes, 
         crea un buen equilibrio al sostener o utilizar el teléfono móvil; y, por último, su ubicación debajo del micrófono garantiza que no haya interferencias durante las conversaciones sin sacrificar la calidad del sonido, 
         lo que se traduce en una mayor velocidad de transmisión</Text>
         <Image style={styles.imagen} source ={{uri:'https://www.informaticadirecto.com/blog/wp-content/uploads/2017/12/Motorola-RAZR-V3.jpg',}}/>
        <Text style={styles.numero}>3.- Iphone 3GS (año 2007)</Text>
        <Text style={styles.text}>El iPhone 3GS fue un smartphone de gama alta, presentado como la tercera generación de iPhone y lanzado el 19 de junio de 2009 en Europa.
           Incluía mejoras de rendimiento, como una cámara de mejor resolución con capacidad de vídeo y control de voz para las redes de ATamp;T,
            que soportaban velocidades de transferencia de datos HSDPA de 7Mbit/s sobre frecuencias WCDMA de 2100 MHz o bandas de espectro sin licencia GSM de 1900MHz; sin embargo, también tenía algunos problemas, como que la duración de la batería no duraba más de un día, a no ser que usaras sólo wifi). El éxito de este producto llevó a Apple Inc. a la WWDC 2010, donde podremos echar un primer vistazo a las nuevas funciones que saldrán el año que viene, ¡incluyendo smartphones compatibles con 4G LTE que ejecuten iOS 5!</Text>
        <Image style={styles.imagen} source ={{uri:'https://www.informaticadirecto.com/blog/wp-content/uploads/2017/12/IPhone-1ero.jpg',}}/>
        <Text style={styles.numero}>3.- BlackBerry Bold (año 2008)</Text>
        <Text style={styles.text}>La Blackberry Bold 9700 fue el smartphone que revolucionó a mucha gente en 2008, cuando salió al mercado. 
        ¡Este dispositivo tenía un procesador que funcionaba a 624MHz y 128mb de memoria flash con ranura MicroSD ampliable hasta 8GBs! 
        También tiene una cámara de 2MP que puede hacer fotos con zoom x2, así como un SO de 5ª edición llamado «BlackBerry»</Text>
        <Image style={styles.imagen} source ={{uri:'https://www.informaticadirecto.com/blog/wp-content/uploads/2017/12/blackberry-bold-9000.jpg',}}/>
        <Text style={styles.numero}>3.- Samsung Galaxy Note (año 2009)</Text>
        <Text style={styles.text}>Con una pantalla de 5,7 pulgadas y una tecnología avanzada, el Samsung Galaxy Note 4 es un teléfono tablet Android que te hará la vida más cómoda
         Se presentó el 3 de septiembre de 2014 en la feria IFA como sucesor del modelo del año pasado, con muchas características intactas, como su capacidad para conservar todas las funciones anteriores,
          pero mejorándolas en algunas áreas; además, para los que lo esperan, ahora tiene velocidades de procesador más rápidas que antes,
         para que puedas disfrutar de respuestas más rápidas al utilizar aplicaciones o jugar a juegos en línea sin ningún tipo de retardo</Text>
         <Image style={styles.imagen} source ={{uri:'https://www.informaticadirecto.com/blog/wp-content/uploads/2017/12/Samsung-Galaxy-Note.jpg',}}/>

      </ScrollView>
    </View>
  );
}


function SettingsScreen({navigation}) {
  const [edad, setEdad] = useState(0);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Busqueda de usuarios por edad</Text>
        <Text style={styles.text}>Inserte la edad a partir de la que quiere ver los usuarios.</Text>
        <Text style={styles.text}>Es decir, si inserta 50, van a salir usuarios mayores de 50</Text>
        <TextInput placeholder="Edad entre 18 y 81" onChangeText={x => setEdad(x)}/>
        <Button
        title='BUSCAR'
          onPress={() => navigation.navigate('Listar', {edad},)}>
            </Button>
      </View>
    );


    
}

function listar({route}){
  const {edad}=route.params;

  const users = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 3, name: 'Manolito Gafotas', age: 73, sex: 'Varón' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
    { id: 8, name: 'Manuela Jimenez', age: 77, sex: 'Mujer' },
    { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
    { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }]




  return (
  <View style={styles.container}>
    <FlatList  data={users} renderItem={({item})=>{
      if (item.age>edad) {
        return(
          <Text style={styles.text}>id: {item.id}  -   Nombre: {item.name}  -   Edad: {item.age}</Text>
        )
      }
    }
  }/>
  </View>)
}
   

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Historia">
      <HomeStack.Screen name="Historia" component={HomeScreen} options={{headerStyle:{backgroundColor:'green',},headerTintColor:'white',headerTitleStyle:{fontWeight:'bold'},headerTitleAlign:'center'}} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Búsqueda" component={SettingsScreen} options={{headerStyle:{backgroundColor:'green',},headerTintColor:'white',headerTitleStyle:{fontWeight:'bold'},headerTitleAlign:'center'}}/>
      <SettingsStack.Screen name="Listar" component={listar} options={{headerStyle:{backgroundColor:'green',},headerTintColor:'white',headerTitleStyle:{fontWeight:'bold'},headerTitleAlign:'center'}}/>
    </SettingsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#BEF5B4',flex: 1, justifyContent: 'center'
  },
  text:{
    fontSize:15, color:'black'
  },
  title:{
    fontSize:21, color:'#047811',marginTop:20,fontWeight:'bold',marginBottom:20, alignSelf:'center'
  },
  imagen:{
    marginTop:30, marginBottom:30 ,width:400, height:270,alignSelf:'center'
  },
  numero:{
    marginBottom:10, marginTop:10, fontSize:18, fontWeight:'bold', fontStyle:'italic',color:'#6b8e23'
  }
})
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Historia') {
                iconName = focused
                  ? 'ios-bookmarks'
                  : 'ios-bookmarks-outline';
              } else if (route.name === 'Listado') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'black',
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="Historia" component={HomeStackScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  
}