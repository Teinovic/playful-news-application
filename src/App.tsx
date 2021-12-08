import './App.css';
import {Home} from './containers/Home';
import {TopStoriesListedContainer} from './containers/StoriesListedContainers/TopStoriesListed'
import {BestStoriesListedContainer} from './containers/StoriesListedContainers/BestStoriesListed'  
import {NewStoriesListedContainer} from './containers/StoriesListedContainers/NewStoriesListed' 
import {StoriesContainer} from './containers/Stories'
import {PlaygroundContainer }from './containers/Playground'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<StoriesContainer />} />
        <Route path="/playground" element={<PlaygroundContainer />} />
        <Route path="/topstories" element={<TopStoriesListedContainer />} />
        <Route path="/beststories" element={<BestStoriesListedContainer />} />
        <Route path="/newstories" element={<NewStoriesListedContainer /> } />  
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}


export default App