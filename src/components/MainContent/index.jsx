import { ListCarousel } from '../ListCarousel'
import { MainCircles } from '../MainCircles'
import { Arrows, Container, Indicators } from './styles'
import { LeftArrow, RightArrow } from '../Buttons'
import { useEffect, useState } from 'react'
import items from './arrays'

export const MainContent = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const moveToLeft = () => {
    setActiveIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const moveToRight = () => {
    setActiveIndex(prevIndex =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <Container>
      <MainCircles />

      <ListCarousel items={items} activeIndex={activeIndex} />

      <Arrows>
        <LeftArrow moveToLeft={moveToLeft} />
        <RightArrow moveToRight={moveToRight} />
      </Arrows>

      <Indicators>
        <div className="numbers">0{activeIndex + 1}</div>
        <div className="dots">
          {items.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </Indicators>
    </Container>
  )
}
