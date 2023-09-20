import { S } from '@components/Main/PostMap/components/style';
import OnePostMapCard from '@components/Main/PostMap/components/One-PostMapCard';
import { SpacePostType } from '@type/space.type';
import { Dispatch, SetStateAction } from 'react';
import { getFormatUser } from '@utils/formatter';
import Pagination from '@components/common/Pagination';

type LeftSectionPropType = {
  postList: SpacePostType[];
  isSelect: number;
  setIsSelect: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{
      center: { lat: number; lng: number };
      isPanto: boolean;
    }>
  >;
  page: number;
  total: number;
  item_length: number;
};

const LeftSection = (props: LeftSectionPropType) => {
  const {
    setIsSelect,
    setState,
    isSelect,
    postList,
    total,
    page,
    item_length,
  } = props;
  return (
    <S.Wrapper>
      {postList.map((item) => (
        <OnePostMapCard
          key={item.post_id}
          post_title={item.post_title}
          post_description={getFormatUser(item.users)}
          post_place={item.place_title}
          post_tags={item.place_tag}
          main_img_url={item.main_img_url}
          create_at={item.post_updated_at}
          onClick={() => {
            setIsSelect(item.post_id);
            setState({ center: item.position, isPanto: false });
          }}
          isSelect={isSelect === item.post_id}
        />
      ))}
      <Pagination total={total} page={page} item_length={item_length} />
    </S.Wrapper>
  );
};

export default LeftSection;
