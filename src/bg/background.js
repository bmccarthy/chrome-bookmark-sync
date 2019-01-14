// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

chrome.bookmarks.onCreated.addListener(function callback(id, bookmark) {
  console.log('created', bookmark);
});

chrome.bookmarks.onRemoved.addListener(function callback(id, bookmark) {
  console.log('removed', id, bookmark);
});

chrome.bookmarks.onChanged.addListener(function callback(id, bookmark) {
  console.log('changed', id, bookmark);
  /*** Title or URL Changed */
  const opts = {
    title: "",
    url: ""
  }
});

chrome.bookmarks.onMoved.addListener(function callback(id, bookmark) {
  console.log('moved', id, bookmark);
  /*** Happens when user moves node from one spot to another spot ***/
  const opts = {
    index: 1,
    oldIndex: 0,
    oldParentId: "2",
    parentId: "2"
  };

});

chrome.bookmarks.onChildrenReordered.addListener(function callback(id, bookmark) {
  console.log('reordered', id, bookmark);
});


const dataformat = {
  bookmarks: {
    'folder1': [
      { 'folder2': [] }
    ]
  }
};
