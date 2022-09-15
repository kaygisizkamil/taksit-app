

import Layout from './components/layouts/Layout';
import MainNavigation from './components/layouts/MainNavigation';
import {Route, Switch} from 'react-router-dom';
import AllRecords from './pages/AllRecords';
import AddNewRecords from './pages/AddNewRecord';
import EditRecord from './pages/EditRecord';

function App() {
  return (
    
    <Layout>
      <Switch>
        
      <Route path='/' exact>
        <AddNewRecords/>
      </Route>
      <Route path='/kayitli'>
        <AllRecords/>
      </Route>
      <Route path='/hesaplama-duzenle' >
        <EditRecord/>
      </Route>
      </Switch>
      
     
     </Layout> 
  );
  
}

export default App;
