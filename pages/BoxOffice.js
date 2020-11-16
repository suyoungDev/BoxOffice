import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.SafeAreaView`
  flex:1;
`;
const Contents = styled.ScrollView`
  padding: 20px;
`;
const Rank = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  margin-right: 12px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
`;
const ListItem = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
`;
const MovieName= styled.Text`
  font-size: 18px;
  font-weight: bold;
`;


function BoxOffice(props){
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    // ajax 비동기 자바스크립트 XML(JSON)
    axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ea9876218d7764c2894c4270a491e31b&targetDt=20201116')
      .then( response => {
        // 완료가 됐을 때
        setList( response.data.boxOfficeResult.dailyBoxOfficeList );
      } )
      .catch( error => {
        // 예외가 발생했을 때
        alert(error.message);
      } )
  }, []);

  return(
    <Container>
      <Contents>
        <Title>박스 오피스</Title>
        {list.map( elem => (
          <ListItem key={ elem.movieCd }>
            <Rank>{ elem.rank }</Rank>
            <MovieName>{ elem.MovieNm }</MovieName>
          </ListItem>
        ))}
      </Contents>
    </Container>
  )
}

export default BoxOffice;