document.getElementById('envelope').addEventListener('click', function () {
  this.classList.toggle('opened');
  
  // Show the letter when envelope is opened  
  setTimeout(() => {
    document.querySelector('.letter').style.opacity = '1';
  }, 500);
});

// Yes Button Click
document.querySelector('.yes-btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevents default behavior
  
  // Hide the envelope, letter, and the heading text
  document.querySelector('.envelope').style.display = 'none';
  document.querySelector('.letter').style.display = 'none';
  document.querySelector('h1').style.display = 'none';  // Hides the heading text

  const catContainer = document.createElement('div');
  catContainer.classList.add('cat-container');

  const text = document.createElement('p');
  text.textContent = "YIPPEE I LOVE YOU SALINA <3";
  text.style.fontFamily = 'Sour Gummy'; // Apply the font family explicitly

  const img = document.createElement('img');
  img.src = 'happy.gif';  // Happy cat image
  img.alt = 'Happy cat';

  catContainer.appendChild(text);
  catContainer.appendChild(img);
  document.body.appendChild(catContainer);
});

// No Button Click
document.querySelector('.no-btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevents default behavior
  
  // Hide the envelope, letter, and the heading text
  document.querySelector('.envelope').style.display = 'none';
  document.querySelector('.letter').style.display = 'none';
  document.querySelector('h1').style.display = 'none';  // Hides the heading text

  const catContainer = document.createElement('div');
  catContainer.classList.add('cat-container');

  const text = document.createElement('p');
  text.textContent = "Thats not awesome :(";
  text.style.fontFamily = 'Sour Gummy'; // Apply the font family explicitly

  const img = document.createElement('img');
  img.src = 'sad.png';  // Sad cat image (Make sure sad.png is correct and in the same folder)
  img.alt = 'Sad cat';

  catContainer.appendChild(text);
  catContainer.appendChild(img);
  document.body.appendChild(catContainer);
});