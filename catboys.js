document.querySelector('button').addEventListener('click', getimg)
function getimg () {
    let drink = document.querySelector('img').value

    fetch(`https://api.catboys.com/img`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.url)
      document.querySelector('img').src = data.url
      document.querySelector('img').style.opacity = 1

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}