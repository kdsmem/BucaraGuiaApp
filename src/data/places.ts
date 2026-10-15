export type Place = {
  id: string;
  name: string;
  category: string;
  zone: string;
  description: string;
  address: string;
  schedule: string;
  tags: string[];
};

// Registros de prueba: validar antes de presentar como información real.
export const places: Place[] = [
  {
    id: 'parque-ejemplo',
    name: 'Parque de ejemplo',
    category: 'Parques',
    zone: 'Bucaramanga',
    description: 'Registro de demostración para probar la interfaz de BucaraGuía.',
    address: 'Por confirmar',
    schedule: 'Por confirmar',
    tags: ['Aire libre'],
  },
  {
    id: 'gastronomia-ejemplo',
    name: 'Sitio gastronómico de ejemplo',
    category: 'Gastronomía',
    zone: 'Bucaramanga',
    description: 'Registro de prueba. Sustituir por información validada antes de publicar.',
    address: 'Por confirmar',
    schedule: 'Por confirmar',
    tags: ['Comida'],
  },
];
