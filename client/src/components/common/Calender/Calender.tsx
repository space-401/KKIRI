import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { YEARS, MONTHS } from './util';
import getYear from 'date-fns/getYear';
import styled from 'styled-components';
import { ReactComponent as CalenderIcon } from '@assets/svg/calenderIcon.svg';
import { postTimeChangeHelper } from '@/utils/time-helper';
import '@components/common/Calender/calender.css';
import { PostType } from '@/types/post.type';
import { getMonth } from 'date-fns';
import { ReactComponent as DownIcon } from '@/assets/svg/chevron/chevron_down.svg';
import { ReactComponent as UpIcon } from '@/assets/svg/chevron/chevron_up.svg';

//메인일 때는 검색기능
type CalenderPropsType = {
  width: number;
  isMain: boolean;
  setPostData?: React.Dispatch<React.SetStateAction<PostType>>;
};

const Calender = ({ isMain, setPostData }: CalenderPropsType) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false]);

  const toggleDropdown = (index: number) => {
    const changeState = !isDropdownOpen[index];
    if (index === 0) {
      setIsDropdownOpen([changeState, false]);
    } else {
      setIsDropdownOpen([false, changeState]);
    }
  };

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setIsDropdownOpen([false, false]);
  };

  //날짜 형식 변환해서 보내줌
  useEffect(() => {
    if (startDate) {
      let newDateStr = {};
      if (endDate) {
        newDateStr = {
          startDate: postTimeChangeHelper(startDate),
          endDate: postTimeChangeHelper(endDate),
        };
      } else {
        newDateStr = {
          startDate: postTimeChangeHelper(startDate),
          endDate: postTimeChangeHelper(startDate),
        };
      }
      {
        !isMain &&
          setPostData!((prev: any) => {
            return {
              ...prev,
              date: newDateStr,
            };
          });
      }
    }
  }, [startDate, endDate]);

  return (
    <div className="custom-react-datepicker__wrapper">
      <label>
        <MStyledDatePicker
          dateFormat="yyyy.MM.dd"
          showYearDropdown
          scrollableYearDropdown
          shouldCloseOnSelect
          yearDropdownItemNumber={15}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          locale={ko}
          selectsRange
          dateFormatCalendar="MMMM"
          calendarClassName="calenderWrapper"
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="customHeaderContainer">
              <div className="selectContainer">
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '16px',
                      fontWeight: 600,
                      fontFamily: 'IBM Plex Sans KR',
                      backgroundColor: '#232120',
                    }}
                    onClick={() => {
                      toggleDropdown(0);
                    }}
                  >
                    {getYear(date)}
                    {isDropdownOpen[0] ? <UpIcon /> : <DownIcon />}
                  </div>
                  {isDropdownOpen[0] && (
                    <select
                      style={{
                        position: 'absolute',
                        top: 30,
                        backgroundColor: '#232120',
                      }}
                      value={getYear(date)}
                      className="year"
                      size={3}
                      onChange={({ target: { value } }) => changeYear(+value)}
                    >
                      {YEARS.map((option) => (
                        <option
                          key={option}
                          value={option}
                          style={{ margin: '4px' }}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '16px',
                      fontWeight: 600,
                      fontFamily: 'IBM Plex Sans KR',
                      backgroundColor: '#232120',
                    }}
                    onClick={() => {
                      toggleDropdown(1);
                    }}
                  >
                    {getMonth(date) + 1}
                    {isDropdownOpen[1] ? <UpIcon /> : <DownIcon />}
                  </div>

                  {isDropdownOpen[1] && (
                    <select
                      style={{
                        position: 'absolute',
                        top: '25px',
                        backgroundColor: '#232120',
                      }}
                      value={getMonth(date)}
                      className="month"
                      size={3}
                      onChange={({ target: { value } }) => changeMonth(+value)}
                    >
                      {MONTHS.map((option) => (
                        <option
                          key={option}
                          value={option}
                          style={{ margin: '4px' }}
                        >
                          {option + 1}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
          )}
        ></MStyledDatePicker>
        <CalenderIcon
          style={{ position: 'absolute', bottom: '28', left: 280 }}
        />
        {!startDate && !isMain && (
          <S.DateText
            style={{
              position: 'absolute',
              bottom: 27,
              left: 15,
              fontWeight: 350,
            }}
            isMain={false}
          >
            등록할 날짜를 입력해 주세요
          </S.DateText>
        )}
        {!startDate && isMain && (
          <S.DateText
            style={{
              position: 'absolute',
              bottom: 25,
              left: 15,
            }}
            isMain={true}
          >
            날짜
          </S.DateText>
        )}
      </label>
    </div>
  );
};

export default Calender;

const MStyledDatePicker = styled(DatePicker)`
  height: ${({ isMain }) =>
    isMain ? '50px' : '60px'}; /* 조건에 따라 height 설정 */
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  border-radius: ${({ isMain }) => (isMain ? '5px' : '10px')};
  width: 322px !important;
  display: flex;
  padding-left: 2.6rem;
`;

const DateText = styled.div<{ isMain: boolean }>`
  color: ${({ isMain }) => (isMain ? '#E9D7EF' : '#767676')};
  position: absolute;
  bottom: 27;
  left: 15;
  font-weight: 400;
`;

export const S = {
  DateText,
};
