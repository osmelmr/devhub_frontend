import type { Product } from "./types/products";

export const mockProducts: Product[] = [
  {
    id: "amz-001",
    title: "Auriculares Inalámbricos Bluetooth 5.2",
    price: 59.99,
    image: "https://picsum.photos/seed/amz1/600/400",
    owner: "admin",
    description:
      "Auriculares con cancelación de ruido activa, hasta 30h de batería y carga rápida.",
    inStock: true,
  },
  {
    id: "amz-002",
    title: 'Smartwatch Deportivo GPS 1.78"',
    price: 129.99,
    image: "https://picsum.photos/seed/amz2/600/400",
    owner: "viewer",
    description:
      "Monitor de ritmo cardíaco, seguimiento de sueño, resistente al agua y con notificaciones de smartphone.",
    inStock: true,
  },
  {
    id: "amz-003",
    title: 'Tablet 10.5" Full HD, 64GB',
    price: 249.0,
    image: "https://picsum.photos/seed/amz3/600/400",
    owner: "admin",
    description:
      "Tablet con procesador octa-core, pantalla táctil de alta definición y soporte para lápiz óptico.",
    inStock: true,
  },
  {
    id: "amz-004",
    title: "Cámara Digital Mirrorless 24MP",
    price: 599.0,
    image: "https://picsum.photos/seed/amz4/600/400",
    owner: "viewer",
    description:
      "Sistema de enfoque automático rápido, grabación 4K y pantalla abatible para vlogs.",
    inStock: true,
  },
  {
    id: "amz-005",
    title: 'Laptop Ultrabook 14" i7, 16GB RAM',
    price: 999.0,
    image: "https://picsum.photos/seed/amz5/600/400",
    owner: "admin",
    description:
      "Procesador Intel i7 de última generación, SSD de 512GB, diseño delgado y ligero.",
    inStock: true,
  },
  {
    id: "amz-006",
    title: "Kit de Cocina Profesional 10 Piezas",
    price: 79.99,
    image: "https://picsum.photos/seed/amz6/600/400",
    owner: "viewer",
    description:
      "Sartenes y ollas antiadherentes, utensilios de acero inoxidable y espátulas de silicona.",
    inStock: true,
  },
  {
    id: "amz-007",
    title: "Altavoz Inteligente WiFi + Bluetooth",
    price: 49.99,
    image: "https://picsum.photos/seed/amz7/600/400",
    owner: "admin",
    description:
      "Control por voz, reproducción de música en streaming y compatibilidad con asistentes virtuales.",
    inStock: true,
  },
  {
    id: "amz-008",
    title: "Mochila Antirrobo USB 20L",
    price: 39.99,
    image: "https://picsum.photos/seed/amz8/600/400",
    owner: "viewer",
    description:
      "Compartimentos múltiples, puerto USB integrado y material resistente al agua.",
    inStock: true,
  },
];
