/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
//import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from './components/PostsContainer/PostsPage';
// Import Dummy Data
import dummyData from './dummy-data';

const App = () => {
  const initialPosts = dummyData;
  const [posts, setPosts] = useState(initialPosts);
  const [searchText, setSearchText] = useState('');
  const changeText = event => {
    setSearchText(event.target.value);
  };
  const handleSearch = event => {
    event.preventDefault();
    setPosts(initialPosts.filter(post => post.username.includes(searchText)));
    setSearchText('');
  }

  return (
    <div className="App">
      {/* Add imported components here to render them */ }   
      <SearchBar
       text={searchText}
       changeText={changeText}
       submitSearch={handleSearch}
      />
      <PostsPage posts={posts} />
    </div>
  );
};

export default App;
