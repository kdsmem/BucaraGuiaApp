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

export const places: Place[] = [
  {
    id: 'lugar-ejemplo-1',
    name: 'Parque de ejemplo',
    category: 'Parques',
    zone: 'Bucaramanga',
    description: 'Lugar de prueba para desarrollar la app.',
    address: 'Por confirmar',
    schedule: 'Por confirmar',
    tags: ['Aire libre'],
  },
  {
    id: 'lugar-ejemplo-2',
    name: 'Sitio gastronómico de ejemplo',
    category: 'Gastronomía',
    zone: 'Bucaramanga',
    description: 'Registro de prueba para el catálogo.',
    address: 'Por confirmar',
    schedule: 'Por confirmar',
    tags: ['Comida'],
  },
];
