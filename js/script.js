
var input = $('#search');
var btn = $('#gif-btn');
var outputDiv = $('.output');

function outputGif(res) {
  var gif = res.data;

  outputDiv.html(`<img src="${gif.images.downsized_large.url}">`);
  input.val('');
}

function getGif() {
  var search = input.val();
  var baseURL = 'https://api.giphy.com/v1/gifs';
  var apiKey = 'r5cMeLwXVfvvi2JdWaNKXvntr7KS3Het';
  var url = baseURL + `/random?api_key=${apiKey}&tag=${search}&rating=g`;

  $.get(url).then(outputGif);
}

btn.click(getGif);



























// Make a request to the Star Wars API
// Get the first 10 starships

// From the starhip data you receive,output the X-Wing's model name
// and manufacturer to the DOM(Window)

// Try making the request with fetch() and jQuery ($.get())
// var baseURL = 'https://swapi.dev/api';
// var url = baseURL + '/starships';
// var orginal = 'https://api.giphy.com/v1/gifs/random?api_key=r5cMeLwXVfvvi2JdWaNKXvntr7KS3Het&tag=elmo&rating=g';


// var baseURL = 'https://api.giphy.com/v1/gifs';
// var apiKey = 'r5cMeLwXVfvvi2JdWaNKXvntr7KS3Het';
// var url = baseURL + `/random?api_key=${apiKey}&tag=elmo&rating=g`;


// function handleResponse(res) {
//   return res.json();
// }

// function outputData(res) {
//   console.log(res.data.images.downsized_large.url);
//   // var xwing = data.results[6];
//   // var p = document.createElement('p');

//   // p.innerText = xwing.name;
//   // document.body.append(p);
// }

// // fetch(url)
// //   .then(handleResponse)
// //   .then(outputData);

// $.get(url).then(outputData);



