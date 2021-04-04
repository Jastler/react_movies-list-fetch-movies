(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(6),c=a.n(l),r=(a(16),a(1)),m=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,n=void 0===a?"":a,l=e.imgUrl,c=e.imdbUrl,r=e.Plot,m=e.Title,s=e.Poster;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:l||s,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t||m))),i.a.createElement("div",{className:"content"},n||r,i.a.createElement("br",null),i.a.createElement("a",{href:c},"IMDB"))))}),s=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(m,Object.assign({key:e.imdbId||e.imdbID},e))})))},o=a(10),d=a(4),u=a.n(d),h=a(7),p=a(8),g=a.n(p);a(21);var v=function(e){return t=e,fetch("".concat("http://www.omdbapi.com/?apikey=cc4d4024&t=").concat(t)).then((function(e){return e.json()}));var t},b=function(e){var t=e.setMovie,a=Object(n.useState)(""),l=Object(r.a)(a,2),c=l[0],s=l[1],d=Object(n.useState)({}),p=Object(r.a)(d,2),b=p[0],f=p[1],E=Object(n.useState)(null),w=Object(r.a)(E,2),M=w[0],N=w[1],j=!!Object.keys(b).length;return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",value:c,placeholder:"Enter a title to search",className:g()("input",{"is-danger":M}),onChange:function(e){s(e.target.value)}})),M&&i.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(c);case 2:if("False"!==(t=e.sent).Response){e.next=6;break}return N(!0),e.abrupt("return");case 6:N(null),f(t);case 8:case"end":return e.stop()}}),e)})))},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){j&&(t((function(e){return e.some((function(e){return(e.imdbId||e.imdbID)===b.imdbID}))?e:[].concat(Object(o.a)(e),[b])})),f({}))}},"Add to the list")))),i.a.createElement("div",{className:"container"},j&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"title"},"Preview"),i.a.createElement(m,b))))},f=a(9),E=function(){var e=Object(n.useState)(f),t=Object(r.a)(e,2),a=t[0],l=t[1];return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(s,{movies:a})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(b,{setMovie:l})))};c.a.render(i.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ad3859f4.chunk.js.map