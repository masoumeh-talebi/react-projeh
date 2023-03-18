import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Data from './Data';

function App() {

const [data , setData] = useState (Data)

  return (
    <div className="App">
      <div className="back-blue">
        <div className="container-fluid">
          <div className='row'>
            <div className='col-6'>
              <Header />
              <Form />
            </div>
            <div className='col-6'>
              <div className="table-form">
                <Table data={data} setData={setData}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  );
}

export default App;
