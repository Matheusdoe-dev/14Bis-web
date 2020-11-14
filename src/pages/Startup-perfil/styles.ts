import styled from "styled-components";

export const PerfilContainer = styled.main`
  & {
  }
`;

export const PerfilHeader = styled.header`
  & {
    background: var(--gradient);
    height: 291px;

    position: relative;
  }
`;

export const LogoEmpresa = styled.div`
  & {
    width: 87px;
    height: 81px;
    border-radius: 9px;
    background: var(--gray);

    position: absolute;
    top: 85%;
    left: 21px;

    display: flex;
    place-content: center;
    color: white;
  }
`;

export const LevelEmpresa = styled.div`
  & {
    width: 196px;
    height: 41px;
    border-radius: 9px 0 0 9px;
    background: var(--gray);

    position: absolute;
    top: 92%;
    right: 0px;

    display: flex;
    place-content: center;
    color: white;
  }
`;

export const NomeDaEmpresa = styled.h2`
  & {
    align-self: flex-start;
    text-align: left;

    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const Segmento = styled.div`
  & {
    display: flex;

    span {
      margin-right: 12px;
      font-weight: 600;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const Dados = styled.section`
  & {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: var(--gap-md) 0;

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: var(--gap-lg);
      margin-bottom: var(--gap-sm);
    }
  }
`;

export const PublicoAlvo = styled.div`
  & {
    display: flex;
    justify-self: flex-start;
    align-items: center;
    flex-direction: column;

    img {
      width: 40px;
      height: 40px;
    }

    span:first-child {
      font-size: 12px;
    }
  }
`;

export const DadosItem = styled.article`
  & {
    display: flex;

    div {
      justify-content: center;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
