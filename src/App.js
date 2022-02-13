import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostProvider from './PostProvider';
import HomePage from './HomePage';
import EditPost from './EditPost';
import ActivePost from './ActivePost';
import NewPost from './NewPost';

function App() {
  
  return (
    <PostProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/posts/editpost/:id" element={<EditPost />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:id" element={<ActivePost />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
