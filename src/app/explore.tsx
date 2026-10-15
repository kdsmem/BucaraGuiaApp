import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import PlaceCard from '../components/PlaceCard';
import { places } from '../data/places';

export default function ExploreScreen() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return places.filter((place) =>
      place.name.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explorar</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Buscar un lugar"
        accessibilityLabel="Buscar lugares por nombre"
        style={styles.input}
      />
      {results.length > 0 ? (
        results.map((place) => <PlaceCard key={place.id} place={place} />)
      ) : (
        <Text style={styles.empty}>No encontramos lugares con ese nombre.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 24,
    backgroundColor: '#F7F8F4',
  },
  title: { color: '#183B32', fontSize: 30, fontWeight: '800', marginBottom: 18 },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D7DED8',
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
  },
  empty: { color: '#53645D', paddingVertical: 20 },
});