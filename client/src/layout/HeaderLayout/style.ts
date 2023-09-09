import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLOR['gray-7']};
  min-height: 100vh;
  width: 100%;
  flex-grow: 1; /* 자식 요소에 맞게 늘어나도록 설정 */
`;

const HeaderWrapper = styled.div`
  margin: 32px 32px 0 32px;
  height: 64px;
  ${flexCenter}
`;

const IconBox = styled.div<{ padding?: number }>`
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  height: inherit;
  width: 160px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    padding-left: ${(props) => (props.padding ? props.padding : 0)}px;
  }
`;

const SpaceBox = styled.div`
  width: calc(100% - 320px);
  min-width: 200px;
  height: inherit;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  ${flexCenter};
  border-radius: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 32px 32px 32px;
  border-radius: 30px;
  min-height: 100vh;
`;

const S = {
  HeaderWrapper,
  Wrapper,
  IconBox,
  SpaceBox,
  ContentWrapper,
};

export default S;