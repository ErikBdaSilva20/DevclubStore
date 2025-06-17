// ListCarousel.jsx
import {
  ProductImg,
  List,
  ProductTag,
  Content,
  ProductName,
  Description,
  FindOutMore,
} from './styles.js'

export function ListCarousel({ items, activeIndex }) {
  return (
    <List>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`item ${index === activeIndex ? 'active' : ''}`}
        >
          <ProductImg>
            <img src={item.img} alt={item.name} />
          </ProductImg>

          <Content>
            <ProductTag>{item.tag}</ProductTag>
            <ProductName>{item.name}</ProductName>
            <Description>{item.description}</Description>
            <FindOutMore>Saiba mais</FindOutMore>
          </Content>
        </div>
      ))}
    </List>
  )
}
