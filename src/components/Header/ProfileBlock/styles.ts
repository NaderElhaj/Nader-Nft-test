import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileBlock = styled.div`
  background: #15181d;
  border: 1px solid #40bddc;
  -webkit-box-shadow: -1px 1px 15px 2px rgb(0 169 204 / 40%);
  box-shadow: -1px 1px 15px 2px rgb(0 169 204 / 40%);
  border-radius: 30px;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
    width: 170px;
  }
`;

export const Balance = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const BalanceTitle = styled.div`
  font-size: 12px;
  color: #777e91;
`;

export const Address = styled.div`
  font-size: 14px;
  color: #777e90;
  line-height: 24px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const BalancePopup = styled.div`
  background: #fcfcfd;
  border: 1px solid #edf0f4;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px -16px rgba(15, 15, 15, 0.06);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 12px;
`;

export const UploadBtn = styled(Link)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 32px;
  padding-bottom: 5px;
  background: linear-gradient(
    315deg,
    #7549d4 0%,
    #e2486a 35.94%,
    #ed6858 69.79%,
    #f09051 100%
  );
  border-radius: 20px;
`;

export const Popup = styled.div`
  position: absolute;
  background: #fcfcfd;
  box-shadow: 0 16px 64px rgba(31, 47, 70, 0.4);
  border-radius: 12px;
  width: 320px;
  padding: 32px 16px;
  top: calc(100% + 3px);
  left: 25px;
  z-index: 1000;
  a {
    display: block;
    font-size: 18px;
    color: #777e90;
    font-weight: 700;
    padding: 12px 0;
    border-bottom: 1px solid #e6e8ec;
  }
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.25s;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.25s;
  }
`;
export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
`;

export const ConnectBtnDiv = styled.div`
  height: 48px;
  width: 180px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
