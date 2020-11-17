import React from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import {ActivityIndicator} from 'react-native'
import moment from 'moment';

const Container = styled.SafeAreaView`
  flex:1;
`;
const Contents = styled.ScrollView`
  flex:1;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  letter-spacing: 3px;
  
`;
const Description = styled.Text`
  font-size: 18px;
  margin: 5px 20px;
  line-height: 30px;
`;
const Back = styled.TouchableOpacity`
  height: 60px;  
  padding-left: 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  
`;
const BackLabel = styled.Text`
  font-size: 18px;
  color: #8c7b75;
`;
const Header = styled.View`
  height: 60px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #8c7b75;
  letter-spacing: 3px;
`;


function MovieDetail(props){
  const [info, setInfo] = React.useState(null);
  React.useEffect( ()=>{
    let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=ea9876218d7764c2894c4270a491e31b';
    url += '&movieCd=' + props.route.params.movieCd;
    axios.get(url)
      .then(respose => {
        setInfo(respose.data.movieInfoResult.movieInfo)
      })
      .catch(error =>{
        alert(error.message);
      });
  }, [])

  return(
    <Container>
      <Header>
        <Back onPress={() => {props.navigation.goBack()}}>
          <BackLabel>◀</BackLabel>
        </Back>
        <HeaderTitle>영화 정보 조회</HeaderTitle>
      </Header>
      <Contents>
        { info === null ?
          <ActivityIndicator size="large" color="#ffcdd2" /> 
          : (
            <>
            <Title>{info.movieNm}</Title>
            <Description>제작년도 : {info.prdtYear}년</Description>
            <Description>개봉년도 : {moment(info.openDt,'YYYYMMDD').format('YYYY년 MM월 DD일') }</Description>
            <Description>상영시간 : {info.showTm}분</Description>
            <Description>국가 : {info.nations.map(nation => nation.nationNm).join(', ')}</Description>
            <Description>감독 : {info.directors.map(directors => directors.peopleNm).join('')}</Description>
            <Description>배우 : {info.actors.map(actors => actors.peopleNm).join(', ')}</Description>
            </>
          ) }
        <Back title={'돌아가기'} 
          onPress={()=> props.navigation.goBack()}/>
      </Contents>
    </Container>
  )
}

export default MovieDetail;