const addBookHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const contents = document.querySelector("#content");

  const response = await fetch("/api/books", {
      method: 'POST',
      body: JSON.stringify({
          title: title.value,
          contents: contents.value
      }),
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {

  } else {
      alert("Cannot add book");
  }
};

document
  .querySelector('#add-book-form')
  .addEventListener('submit', addBookHandler);