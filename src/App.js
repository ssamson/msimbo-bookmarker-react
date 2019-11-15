import React, { useState, useEffect } from 'react';
import Footer from './components/footer';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';

function App() {
    const [bookmarks, setBookmarks] = useState(
        JSON.parse(localStorage.getItem('bookmarks')) || []
    );
    const [bookmarksCopy, setBookmarksCopy] = useState([]);

    const [filter, setFilter] = useState('');
    
        // bookmarks.push(bookmark);
    useEffect(() => {
        // Update bookmarks in local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        setBookmarksCopy(bookmarks);
    }, [bookmarks]);

    useEffect(() => {
        setBookmarksCopy(
            bookmarks.filter(bookmark => {
                return bookmark.name.toUpperCase().includes(filter.toUpperCase());
            })
        );
    }, [filter, bookmarks]);
    
    return (
    <div className="container">
        <h3 className="text-muted">Bookmarker</h3>
        <BookmarkForm bookmarks={bookmarks} setBookmarks={setBookmarks} />
        <input 
            type="text"
            // id="filter"
            name="filter"
            className="form-control"
            placeholder="Search Bookmarks By Name..."
            value={filter}
            onChange={e => {
                setFilter(e.target.value);
            }}
         />
        <BookmarkList 
            bookmarksCopy={bookmarksCopy}
            setBookmarksCopy={setBookmarksCopy}
            bookmarks={bookmarks} 
            setBookmarks={setBookmarks}
        />
        <Footer />
    </div>
    );
}

export default App;