import { StyleSheet, Text, SafeAreaView, Platform, ScrollView, View, FlatList } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  let pokemonList = [
    {
      name: "Charmander",
      type: "Fire",
      hp: 39,
      moves: [
        "Scratch",
        "Ember",
        "Growl",
        "Leer"
      ],
      weaknesses: [
        "Water",
        "Rock"
      ],
      image: require("./assets/charmander.png")
    },
    {
      name: "Pikachu",
      type: "Electric",
      hp: 35,
      moves: [
        "Thunder Shock",
        "Growl",
        "Tail Whip",
        "Quick Attack"
      ],
      weaknesses: [
        "Ground"
      ],
      image: require("./assets/pikachu.png")
    },
    {
      name: "Sandslash",
      type: "Ground",
      hp: 75,
      moves: [
        "Sand Attack",
        "Slash",
        "Poison Sting",
        "Swift"
      ],
      weaknesses: [
        "Water",
        "Grass",
        "Ice"
      ],
      image: require("./assets/sandslash.png")
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView>
        {pokemonList.map((pokemon,index) => <PokemonCard key={index} {...pokemon}/>)}
      </ScrollView>  */}
      <FlatList
        data={pokemonList}
        renderItem={({ item, index }) => <PokemonCard {...item} />}
        // horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={() => <Text>No Pokemon Found</Text>}
        ListHeaderComponent={() => <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 16 }}>Pokemon List</Text>}
        ListFooterComponent={() => <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 16 }}>End of List</Text>}
      />
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
