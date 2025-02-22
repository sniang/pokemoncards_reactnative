import { StyleSheet, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmanderData = {
    name: 'Charmander',
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
    image: require('./assets/charmander.png'),
  }

  const pikachuData = {
    name: 'Pikachu',
    type: 'Electric',
    hp: 35,
    moves: ['Thunder Shock', 'Growl', 'Tail Whip', 'Quick Attack'],
    weaknesses: ['Ground'],
    image: require('./assets/pikachu.png'),
  }

  const sandslashData = {
    name: 'Sandslash',
    type: 'Ground',
    hp: 75,
    moves: ['Sand Attack', 'Slash', 'Poison Sting', 'Swift'],
    weaknesses: ['Water', 'Grass', 'Ice'],
    image: require('./assets/sandslash.png')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...sandslashData}/>
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
