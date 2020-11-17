import React from 'react';
import {ActivityIndicator} from 'react-native'
import styled from 'styled-components';
import axios from 'axios';
import Title from '../components/Title';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import moment from 'moment';

const Container = styled.SafeAreaView`
  flex:1;
`;
const Contents = styled.ScrollView`
  padding: 9px;
`;
const Rank = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #bcaaa4;
  margin-right: 20px;
`;


function BoxOffice(props){
  const [list, setList] = React.useState([]);
  let currentDate = moment().format('YYYYMMDD')-1;
  
  React.useEffect(() => {
    // ajax 비동기 자바스크립트 XML(JSON)
    let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ea9876218d7764c2894c4270a491e31b&';
    url += 'targetDt=' + currentDate;
    axios.get(url)
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
        <Title>Box Office</Title>
        
        { list.length === 0 && (
              <ActivityIndicator size="large" color="#ffcdd2" />
        )}

        {list.map( item => (
          <ListItem key={item.movieCd} onPress={()=>{
            props.navigation.navigate('MovieDetail', {movieCd: item.movieCd});
          }}>
            <Rank>{ item.rank }</Rank>
            <MovieName>{ item.movieNm }</MovieName>
          </ListItem>
        ))}
        <Rank>{currentDate}</Rank>
      </Contents>
    </Container>
  )
}

export default BoxOffice;
