import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Place } from '../data/places';

type PlaceCardProps = {
  place: Place;
};

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link href={{ pathname: '/place/[id]', params: { id: place.id } }} asChild>
      <Pressable style={styles.card} accessibilityRole="button">
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>Imagen pendiente</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.category}>{place.category}</Text>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.zone}>{place.zone}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {place.description}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E4E9E4',
  },
  imagePlaceholder: {
    height: 130,
    backgroundColor: '#DCE9E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: { color: '#53645D' },
  content: { padding: 16 },
  category: { color: '#28745B', fontWeight: '700', fontSize: 12 },
  name: { color: '#183B32', fontSize: 18, fontWeight: '700', marginTop: 5 },
  zone: { color: '#53645D', marginTop: 4 },
  description: { color: '#53645D', marginTop: 8, lineHeight: 20 },
});