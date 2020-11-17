import React from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import Title from '../components/Title';
import Row from '../components/Row';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';


const Container = styled.SafeAreaView`
  flex: 1;
  padding: 9px;
`;
const Input = styled.TextInput`
  flex: 1;
  border: 1px solid #e5e5e5;
  padding: 0px 12px;
`;
const Button = styled.Button`
`;

function Search(props){
  const [keyword, setKeyword] = React.useState('');
  const [list, setList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  // 로딩이 되는지 여부를 이전과 같이 리스트의 길이로 판단하는 것이 아니라
  // 로딩의 상태를 별도로 만들어서 useState로 관리

  const search = React.useCallback( ()=> {
    let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=ea9876218d7764c2894c4270a491e31b';
    url += '&movieNm=' + keyword;
    setIsLoading(true);
    axios.get(url)
      .then(response => {
        setIsLoading(false);
        setList( response.data.movieListResult.movieList );
      })
      .catch(error => alert(error.message));
  }, [keyword])

  return(
    <Container>
      <Title>영화 검색</Title>
      <Row>
        <Input value={keyword}
          onChangeText={ value => setKeyword(value) } />
        <Button title="검색" onPress={ search } />
      </Row>
      {isLoading 
        ? ( <ActivityIndicator size="large" color="#ffcdd2" /> ) 
        : ( list.map( item => (
          <ListItem key={item.movieCd}
          onPress={ () => {
            props.navigation.navigate('MovieDetail', {movieCd: item.movieCd});
          }}>
            <MovieName>{item.movieNm}</MovieName>
          </ListItem>
        ))
      )}
    </Container>
  )
}

export default Search;