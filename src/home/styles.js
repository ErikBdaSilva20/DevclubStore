import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  position: fixed;
  width: 90vw;
  top: 0;
  padding: 20px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const MainContainer = styled.main`
  height: 100vh;
  background: linear-gradient(135deg, #0f0f1e 0%, #1f1f3a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 247, 255, 0.25) 0%,
      rgba(15, 15, 30, 0) 70%
    );

    position: absolute;
    left: 40%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: blur(50px);
    z-index: 1;

    animation: pulse 3s infinite alternate;

    @media (max-width: 768px) {
      left: 50%;
      top: 60%;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(2);
    }
  }
`
