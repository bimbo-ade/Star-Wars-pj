import styled from "styled-components";
import starbg from "../../assets/starbg.jpg";
import { device } from "../Device";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 100%;
  background-image: url(${starbg});

  .header {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: 50vh;
    width: 100%;
    background-color: rgba(0, 0, 20, 0.5);
    position: relative;

    @media ${device.mobile} {
      height: 44vh;
    }

    @media ${device.ipad} {
      height: 44vh;
    }

    img {
      position: absolute;
      top: 5%;
      left: 2%;

      @media ${device.mobile} {
        width: 12%;
      }
    }

    h1 {
      @media ${device.mobile} {
        margin-top: 3.8rem;
        font-size: 1.6rem;
      }

      @media ${device.ipad} {
        padding-top: 2rem;
        font-size: 2rem;
      }
    }

    p {
      width: 80%;
      font-size: 1.1rem;
      margin: 0 auto 0;
      padding-top: 1rem;
      text-align: center;

      @media ${device.mobile} {
        padding-top: 0.6rem;
        font-size: 0.6rem;
      }

      @media ${device.ipad} {
        padding-top: 0.6rem;
        font-size: 0.9rem;
      }
    }
  }

  .character-info {
    height: auto;
    width: 100%;
    text-align: center;
    padding: 2rem 0;
  }

  .table {
    width: 90%;
    margin: 1rem auto 0;
    height: auto;

    @media ${device.mobile} {
      width: 95%;
    }

    @media ${device.ipad} {
      width: 90%;
    }
  }

  .col {
    padding: 1.3rem;
    height: 60px;
    border-bottom: 2px solid black;
    background-color: rgb(40, 40, 40);

    @media ${device.mobile} {
      height: 50px;
    }
  }

  .row {
    text-align: center;

    height: 50px;
    padding: 1rem;
    &:nth-of-type(even) {
      background-color: rgba(0, 0, 12);
    }
    &:nth-of-type(odd) {
      background-color: rgba(0, 0, 12, 0.4);
    }
  }
  button {
    padding: 1rem 2rem;
    margin: 1rem 0;
    background-color: rgba(0, 0, 12);
    color: white;
    cursor: pointer;
    border-radius: 0.3rem;
  }
`;
