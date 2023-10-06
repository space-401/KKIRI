import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 48px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  border-radius: 40px;
  min-height: 800px;
  background-color: ${({ theme }) => theme.COLOR.black};
`;

const UndefinedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const UndefinedDefaultImage = styled.div<{ imgUrl: string }>`
  margin-top: 102px;
  width: 273px;
  height: 273px;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
  background-color: ${({ theme }) => theme.COLOR['gray-4']};
  border-radius: 40px;
`;

const UndefinedPostText = styled.div`
  margin-top: 32px;
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: normal;
`;

const UndefinedShareText = styled.div`
  margin-top: 30px;

  color: ${({ theme }) => theme.COLOR.orange};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
`;

const PostList = styled.div`
  margin: 31px 0;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media ${({ theme }) => theme.DEVICE.tablet} {
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
`;

const PaginationBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const S = {
  Wrapper,
  UndefinedList,
  UndefinedDefaultImage,
  UndefinedPostText,
  UndefinedShareText,
  PostList,
  FilterGroup,
  PaginationBox,
};

export default S;
