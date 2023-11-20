import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';
import { PageSelectSet } from './components/PageSelectSet';
import { FormCreateCard } from './components/FormCreateCard';
import { FormCreateSet } from './components/FormCreateSet';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageSelectSet />}/>
        <Route path='/set/:id' element={<PageViewSet />}/>
        <Route path='/card/:id' element={<PageViewCard />}/>

        <Route path='/admin' element={<PageCreateSet />}>
          <Route path='createset' element={<FormCreateSet />}/>
          <Route path='createcard' element={<FormCreateCard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
