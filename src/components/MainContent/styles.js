import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-bottom: 120px;
    overflow-y: auto;
  }
`

export const Arrows = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  @media (max-width: 768px) {
    top: 90%;
    width: 80%;
  }
`

export const Indicators = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 5px;
  }

  .numbers {
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.08);
  }

  .dots {
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 40px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 10px;
  }

  .dot.active {
    background-color: rgb(0, 251, 255);
    box-shadow: 0 0 10px rgba(0, 251, 255, 0.5);
  }
`
