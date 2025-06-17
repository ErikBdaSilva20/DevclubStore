// MainContent.jsx
import appeWatch from '../../assets/apple-watch.png'
import visionPro from '../../assets/vision-pro.png'
import airPods from '../../assets/air-pods.png'

const items = [
  {
    id: 1,
    name: 'Apple Watch Series 10',
    tag: 'Novo Lançamento',
    img: appeWatch,
    description:
      'O Apple Watch Series 10 é o smartwatch mais avançado da Apple, com recursos de saúde e fitness aprimorados, design elegante e integração perfeita com o ecossistema Apple.',
  },
  {
    id: 2,
    name: 'Air Pods Max',
    tag: 'Som de alta qualidade',
    img: airPods,
    description:
      'Os AirPods Max são fones de ouvido over-ear da Apple, oferecendo som de alta fidelidade, cancelamento ativo de ruído e conforto excepcional para uma experiência auditiva imersiva.',
  },
  {
    id: 3,
    name: 'Apple Vision Pro',
    tag: 'Alta performance',
    img: visionPro,
    description:
      'O Vision Pro é um dispositivo de realidade aumentada da Apple que combina tecnologia avançada com design inovador, oferecendo uma experiência imersiva e interativa.',
  },
]

export default items
