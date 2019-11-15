import React from 'react';

export default function BookmarkList({ 
    bookmarksCopy, 
    setBookmarksCopy, 
    bookmarks, 
    setBookmarks
}) {
    const removeBookmark = bookmark => {
        const newBookmarks = [...bookmarks];

        for (let i = 0; i < newBookmarks.length; i++) {
            if (newBookmarks[i].name === bookmark.name) {
                newBookmarks.splice(i, 1);
                break;
            }
        }
        setBookmarks(newBookmarks);
    };

    return (
        <div>
             {bookmarksCopy.map((bookmark, i) => (
                 <div key={i}>
                     <h3>{bookmark.name}</h3>
                     <a href={bookmark.url} className="btn btn-success">
                         Visit
                     </a>
                     <button 
                        onClick={removeBookmark.bind(this, bookmark)}
                        className="btn btn-danger">
                         Delete
                     </button>
                    </div>
             ))}
        </div>
    );
}
