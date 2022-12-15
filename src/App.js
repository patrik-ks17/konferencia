import styled from 'styled-components'
import Presentations from './Presentations'

function App() {
  return (
    <>
      <Header>IOK VKK Demo</Header>
      <Main>
        <h1>Előadások</h1>
        <Presentations/>
      </Main>
      <Footer>
        &copy; HTTP Alapítvány
      </Footer>
    </>
  );
}

export default App;


const Header = styled.header`
  height: 58px;
  background-color: rgb(20,71,92);
  color: white;
  font-size: 18px;
  padding: 15px;
`

const Footer = styled.footer`
  height: 58px;
  background-color: rgb(20,71,92);
  color: white;
  font-size: 18px;
  padding: 15px;
`

const Main = styled.main`
  padding: 15px;
  background-color: rgb(214,244,245);
  height: calc(100vh - 58px - 58px);
  overflow: auto;
`