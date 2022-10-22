import styled from "styled-components";
import { device } from "../../../src/components/Device";

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${device.mobile} {
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .image-cont {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media ${device.mobile} {
      width: 100%;
      align-items: start;
      justify-content: start;
      // margin-top: 9rem;
    }
    @media ${device.ipad} {
      width: 100%;
      align-items: start;
      justify-content: start;
    }
    .img-bg1 {
      width: 100%;

      @media ${device.mobile} {
        display: none;
      }
      @media ${device.ipad} {
        display: none;
      }
    }
    .img-bg2 {
      display: none;
      @media ${device.mobile} {
        display: block;
        width: 100%;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      @media ${device.ipad} {
        display: block;
        width: 100%;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .img-overlay {
      position: absolute;
      top: 28%;
      left: 25%;
      box-shadow: 0 0 10px 2px red;

      @media ${device.mobile} {
        position: absolute;
        top: 24%;
        left: 11%;
        width: 80%;
      }
      @media ${device.ipad} {
        position: absolute;
        top: 25%;
        left: 15%;
        width: 70%;
      }
    }
  }

  .header {
    position: absolute;
    top: 4%;
    left: 20%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    @media ${device.mobile} {
      top: 4%;
      left: 0;
      width: 100%;
    }
    @media ${device.ipad} {
      top: 4%;
      left: 0;
      width: 100%;
    }

    h4 {
      width: 13rem;
      font-size: 1.3rem;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 0.3rem;
      padding: 1.1rem 21rem;
      cursor: pointer;

      @media ${device.mobile} {
        font-size: 1.1rem;
        letter-spacing: 0.3rem;
      }
    }

    span {
      padding-top: 0.1rem;
      position: absolute;
      right: 35%;
      top: 32%;
      @media ${device.mobile} {
        display: none;
      }
    }

    &:hover ul {
      display: block;
    }
  }

  .ul-cont {
    background-image: linear-gradient(to right, red, black);
    opacity: 0.8;
    width: 100%;
  }

  ul {
    display: none;
    width: 100%;

    transform: scale(1);
    transition: transform 0.4s ease-in-out;
    z-index: 1;

    &:hover {
      transform: scale(0.97);
    }

    li {
      opacity: 1;
      list-style: none;
      font-size: 1.3rem;
      padding: 1.5rem;
      color: black;
      position: relative;
      color: white;
      text-align: left;
      cursor: pointer;

      .li-span {
        margin-left: 0.4rem;
        padding-top: 0.4rem;
        position: absolute;
        right: 10%;
        top: 35%;
      }
    }
  }
  .link {
    text-decoration: none;
  }
`;
