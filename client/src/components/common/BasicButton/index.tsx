import S from './style';
import { PropsWithChildren } from 'react';

type BasicButtonProps = {
  color?: string;
  backgroundColor?: string;
  padding?: number;
  fontSize?: number;
};

const BasicButton = ({
  children,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>;
};

export default BasicButton;