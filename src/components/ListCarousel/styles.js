import styled from 'styled-components'

export const List = styled.div`
  .item {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    /* Animações */
    transform: translateX(100vw);
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  }

  .active {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    .item {
      flex-direction: column;
      padding-bottom: 130px;
    }
  }
`

export const ProductImg = styled.div`
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  img {
    max-width: 80%;
    max-height: 90%;
    filter: drop-shadow(0 0 30px rgba(0, 247, 255, 0.3));

    /* Animações */
    transform: translateX(500px);
    opacity: 0;
    transition: transform 0.6s ease, opacity 0.6s ease;
    transition-delay: 0.7s;

    @media (max-width: 768px) {
      max-width: 80%;
    }

    @media (max-width: 480px) {
      margin-top: 50px;
    }
  }

  .active & img {
    transform: translateX(0);
    opacity: 1;
  }
`

export const Content = styled.div`
  width: 55%;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 80%;
    padding-right: 0;
    align-items: center;
    text-align: center;
  }
`

export const ProductTag = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  color: #00f7ff;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;

  /* Animações */
  transform: translateX(400px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  transition-delay: 1.5s;

  .active & {
    transform: translateX(0);
    opacity: 1;
  }
`

export const ProductName = styled.p`
  font-size: 4.5rem;
  font-family: 'Orbitron', sans-serif;
  line-height: 1.1;
  margin-bottom: 20px;

  /* Animações */
  transform: translateX(400px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  transition-delay: 0.5s;

  .active & {
    transform: translateX(0);
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }

  @media (max-width: 380px) {
    font-size: 2rem;
  }
`

export const Description = styled.p`
  font-size: 1.1rem;
  color: #b8b8d0;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;

  /* Animações */
  transform: translateX(400px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  transition-delay: 1s;

  .active & {
    transform: translateX(0);
    opacity: 1;
  }
`

export const FindOutMore = styled.button`
  cursor: pointer;
  padding: 12px 16px;
  background: linear-gradient(90deg, #00f7ff, #0066ff);
  background-size: 200% 200%;
  border-radius: 30px;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  &:hover {
    background-position: 100% 0;

    border: 2px solid #fff;
    color: #fff;
    scale: 1.1;
  }

  /* Animações */
  transform: translateX(400px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  transition-delay: 1.3s;

  .active & {
    transform: translateX(0);
    opacity: 1;
  }
`
