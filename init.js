let redditJson = `[
    {"title": "Webpack From Zero to Hero", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"},
    {"title": "Codegen with GraphQL and TypeScript", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"},
    {"title": "Snake in 100 lines of JS", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"},
    {"title": "Best book to learn JavaScript", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"},
    {"title": "great article to know about async programming in node js", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"},
    {"title": "Testing with Jest and Vue.js: Pocket guide", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"},
    {"title": "Webpack From Zero to Hero", "postedBy":"u/thisisnotarealaccount", "redditScore":"50", "link":"#"}
]`;

let reddit = JSON.parse(redditJson);

let html = "";
let newsFeed = document.getElementById("news-feed");

reddit.forEach(redditNews => {
  html += ` <li><a href ="#" class="post"><p>${redditNews.title}</p>`;
  html += `<span class="posted-by">Posted by: </span><span class="account">${
    redditNews.postedBy
  }</span>`;
  html += `<br><span class="reddit-score">Reddit Score: <span></span>${
    redditNews.redditScore
  }</span></span></a>`;
  html += `<a href="${
    redditNews.link
  }" class="comment-link">Link to Comments</a></li>`;
  newsFeed.innerHTML = html;
});

let jsHistory = `[
    {"icon":"https://medium.com/favicon.ico", "link":"https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf", "title":"How to Build a Responsive Navigation Bar using CSS Flexbox and Javascript", "time":"3 days ago"},
    {"icon":"https://www.javascriptjanuary.com/favicon.ico", "link": "https://www.javascriptjanuary.com/blog/modern-responsive-navbar-with-css-grid-and-media-query", "title":"Modern Responsive Navbar with CSS-Grid and Media Query", "time":"3 days ago"},
    {"icon":"https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png", "link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys", "title":"Object​.keys()", "time":"6 days ago"},
    {"icon":"https://www.freecodecamp.org/favicon.ico", "link":"https://www.freecodecamp.org/forum/t/intermediate-algorithm-scripting-wherefore-art-thou/227175", "title":"Intermediate Algorithm Scripting: Wherefore art thou", "time":"6 days ago"},
    {"icon":"https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png", "link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some", "title":"Array​.prototype​.some()", "time":"6 days ago"},
    {"icon":"https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png", "link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function", "title":"Type​Error: \\"x\\" is not a function", "time":"3 days ago"},
    {"icon":"https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png", "link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter", "title":"Array​.prototype​.filter()", "time":"6 days ago"},
    {"icon":"https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png", "link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every", "title":"Array​.prototype​.every()", "time":"9 days ago"},
    {"icon":"https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png", "link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes", "title":"Array​.prototype​.includes()", "time":"9 days ago"}
]`;

let js = JSON.parse(jsHistory);

let jsHtml = "";
let jsNewsFeed = document.getElementById("js-news");

js.forEach(feed => {
  jsHtml += `<li><img src="${feed.icon}">`;
  jsHtml += `<a href="${feed.link}">${feed.title}</a>`;
  jsHtml += `<span class="main-content__span">${feed.time}</span></li>`;
  jsNewsFeed.innerHTML = jsHtml;
});

let github = `[
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"repo": "lorem ipsum","issue":"Issue #420", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
]`;

let gh = JSON.parse(github);
let gitHtml = "";
let gitNewsFeed = document.getElementById("git-news-feed");

gh.forEach(x => {
  gitHtml += `<li><a href ="#" class="post"><p class="repo">Repo: ${
    x.repo
  }</p><span class="repo-issue">${x.issue}</span>`;
  gitHtml += `<br><span class="repo-lorem">${x.content}</span></a></li>`;
  gitNewsFeed.innerHTML = gitHtml;
});

function startNewTime() {
  let day = new Date();
  let hr = day.getHours();
  let min = day.getMinutes();
  let ap;

  ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;

  hr = checkTime(hr);
  min = checkTime(min);

  document.getElementById("clock").innerHTML = hr + ":" + min + "" + ap;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[day.getMonth()];
  let today = day.getDate();
  let year = day.getFullYear();

  document.getElementById("date").innerHTML = month + " " + today + ", " + year;

  let time = setTimeout(function() {
    startNewTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startNewTime();

document.querySelector(".toggle-pull").addEventListener("click", function() {
    document.getElementById("git-news-feed").style.display="none";
    
    document.querySelector(".pull-caret").classList.remove("hidden");
    document.querySelector(".pull-caret").classList.add("active");
    document.querySelector(".issues-caret").classList.remove("active");
    document.querySelector(".issues-caret").classList.add("hidden");


})

document.querySelector(".toggle-issues").addEventListener("click", function() {
    document.getElementById("git-news-feed").style.display="block";
    document.querySelector(".issues-caret").classList.remove("hidden");
    document.querySelector(".issues-caret").classList.add("active");
    document.querySelector(".pull-caret").classList.remove("active");
    document.querySelector(".pull-caret").classList.add("hidden");

})

