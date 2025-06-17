import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const TechCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;

  .circle {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    filter: blur(5px);
    pointer-events: none;
  }

  .circle:nth-child(1) {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
    pointer-events: none;
  }

  .circle:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 30%;
    right: 15%;
    pointer-events: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle:nth-child(3) {
    width: 250px;
    height: 250px;
    bottom: 20%;
    left: 20%;
    pointer-events: none;
  }

  .circle:nth-child(4) {
    width: 180px;
    height: 180px;
    bottom: 10%;
    right: 10%;
    pointer-events: none;
  }

  @keyframes pulse {
    0% {
      opacity: 0.4;
      transform: scale(1);
    }
    100% {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
`
