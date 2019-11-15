import React, { useState } from 'react';

const BookmarkForm = ({ bookmarks, setBookmarks }) => {
    const [siteName, setSiteName] = useState('');
    const [siteUrl, setSiteUrl] = useState('');
    const submit = e => {
        e.preventDefault();
        // Create a bookmark object
        const bookmark = {
            name: siteName,
            url: siteUrl
        };
        // Store bookmark
        // let bookmarks = [];
        // Check if the local storage is not empty
        if (localStorage.getItem('bookmarks') !== null) {
            // Get bookmarks from local storage
        setBookmarks(JSON.parse(localStorage.getItem('bookmarks')));
        }
        // Adding new bookmarks
        setBookmarks([...bookmarks, bookmark]);
        // Empty inputs
        setSiteName('');
        setSiteUrl('');
        };
    return (
        <div className="jumbotron">
            <h2>Bookmark Your Favorite Sites</h2>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="siteName">Site Name</label>
                    <input 
                        type="text"
                        name="siteName"
                        // id="siteName"
                        className="form-control"
                        placeholder="Enter Site Name..."
                        value={siteName}
                        onChange={e => {
                            setSiteName(e.target.value);
                    }}
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="siteURL">Site Url</label>
                    <input
                        type="text"
                        name="siteURL"
                        //  id="siteURL"
                        className="form-control"
                        placeholder="Enter Site Url"
                        value={siteUrl}
                        onChange={e => {
                            setSiteUrl(e.target.value);
                     }}
                    />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default BookmarkForm;
