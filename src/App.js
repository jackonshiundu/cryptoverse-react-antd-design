import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd'
import {Navbar,Homepage,Cryptocurencies,News,CryptoDetails} from './components/index'
function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage/>} />
              <Route exact path='/cryptocurencies' element={<Cryptocurencies/>} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>} />
              <Route exact path='/news' element={<News/>} />
            </Routes>
          </div> 
        </Layout>
      <div className='footer' level={5} >
        <Typography.Title style={{color:'white',textAlign:'center'}}>
          CrtptoVerse <br/>
          All rights Reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
