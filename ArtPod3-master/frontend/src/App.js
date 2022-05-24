import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
// Components
import Login from './components/Login';
// Pages
import HomePage from './pages/homepage/HomePage';
// authenticate
import SignUpPage from './pages/authenticate/SignUpPage';
import LoginPage from './pages/authenticate/LoginPage';
//forum
import ForumPage from './pages/forum/ForumPage';
import PostListPage from './pages/forum/PostListPage';
import PostDetailsPage from './pages/forum/PostDetailsPage';
import CreatePost from './pages/forum/CreatePost';
import EditPost from './pages/forum/EditPost';
//artsearch
import NavBar from './components/NavBar';
import ArtworksContainer from './components/artSearch/ArtworksContainer';
import ArtworkDetailsContainer from './components/artSearch/ArtworkDetailsContainer';
import ArtworksHeader from './components/artSearch/ArtworksHeader';

//news
import NewsPage from './pages/news/NewsPage';
// footer
import Footer from './components/Footer';
import './App.css';



function App() {
  // state
  const [username, setUsername] = useState("")
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
        </Routes>
        <Login username= { username } setUsername={ setUsername }/>
        <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/login" element={ <LoginPage setUsername={ setUsername }/> } />
          <Route path="/forum" element={ <ForumPage/> } />

          <Route path="/artSearch" element={ <ArtworksContainer/> } />
          <Route path="/forum/:section" element={ <PostListPage /> } />
          <Route path="/forum/:section/create-post" element={ <CreatePost username={ username } /> } />
          <Route path="/forum/:section/:postId/edit-post" element={ <EditPost username={ username } /> } />
          <Route path="/forum/:section/:postId" element={ <PostDetailsPage username={ username }/> } />
          <Route path="/artsearch" element={ <ArtworksHeader /> } />
          <Route exact path="/" element={<ArtworksContainer />} />
          <Route exact path="/artSearch/artworkdetails/:id" element={<ArtworkDetailsContainer />} />
          <Route path="/news" element={ <NewsPage /> } />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>

  );
}

export default App;
