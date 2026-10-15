import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const categories = ['Parques', 'Gastronomía', 'Cultura', 'Naturaleza'];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.eyebrow}>DESCUBRE SANTANDER</Text>
      <Text style={styles.title}>BucaraGuía</Text>
      <Text style={styles.subtitle}>
        Encuentra lugares y planea tu próxima salida por Bucaramanga.
      </Text>

      <Text style={styles.sectionTitle}>Explora por categoría</Text>
      <View style={styles.categories}>
        {categories.map((category) => (
          <Link key={category} href="/(tabs)/explore" style={styles.category}>
            {category}
          </Link>
        ))}
      </View>

      <Text style={styles.sectionTitle}>¿Qué te gustaría conocer?</Text>
      <Link href="/(tabs)/explore" style={styles.button}>
        Ver lugares
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, paddingTop: 32, backgroundColor: '#F7F8F4' },
  eyebrow: { color: '#28745B', fontSize: 12, fontWeight: '700', letterSpacing: 1.2 },
  title: { color: '#183B32', fontSize: 36, fontWeight: '800', marginTop: 8 },
  subtitle: { color: '#53645D', fontSize: 16, lineHeight: 24, marginTop: 8 },
  sectionTitle: { color: '#183B32', fontSize: 20, fontWeight: '700', marginTop: 32, marginBottom: 14 },
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  category: { backgroundColor: '#E2EFE8', color: '#205B47', padding: 12, borderRadius: 18, overflow: 'hidden' },
  button: { backgroundColor: '#28745B', color: '#FFFFFF', textAlign: 'center', padding: 15, borderRadius: 12, overflow: 'hidden', fontWeight: '700' },
});