const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.id}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };
  });

  return promise;
};

xhrPromise("GET", url)
  .then(response => {

    const posts = JSON.parse(response)
    let result = ''
    posts.forEach(item => {
      result += template(item)
    })
    //console.log(result)
    document.getElementById("blog").innerHTML = result;

    const userPromises = posts.map(post => {
           return xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(userResponse => {
          const user = JSON.parse(userResponse);
         //console.log(user)
          const authorElement = document.querySelector(`.author[data-id="${post.id}"]`);
          if (authorElement) {
            authorElement.textContent = user.name;
          }
        })
        .catch(error => console.error('Error: ', error));
    });
    // return Promise.all(userPromises);
  })
  .catch(error => console.error('Error: ', error));

/*
Продовжити ланцюжок промісив, використовуючи метод then, де потрібно звернутись до сервера https://jsonplaceholder.typicode.com/users 
і для кожного userId отримати ім'я user, після чого помістити це ім'я всередину елемента з класом "author". */