import React from 'react';
import {ActivityIndicator} from 'react-native'
import styled from 'styled-components';
import axios from 'axios';

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
const Title = styled.Text`
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 6px;
  padding: 10px 0px;
  color: #8c7b75;
`;
const ListItem = styled.TouchableOpacity`
  padding: 11px 20px 11px 10px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;

`;
const MovieName= styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 2px 0px;
`;


function BoxOffice(props){
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    // ajax 비동기 자바스크립트 XML(JSON)
    axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ea9876218d7764c2894c4270a491e31b&targetDt=20201114')
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
              <ActivityIndicator size="large" color="" />
        )}

        {list.map( item => (
          <ListItem key={item.movieCd} onPress={()=>{
            props.navigation.navigate('MovieDetail', {movieCd: item.movieCd});
          }}>
            <Rank>{ item.rank }</Rank>
            <MovieName>{ item.movieNm }</MovieName>
          </ListItem>
        ))}
      </Contents>
    </Container>
  )
}

export default BoxOffice;