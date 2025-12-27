fetch('http://localhost:3000/api/notices')
  .then(response => response.json())
  .then(data => {
    let mainContainer = document.getElementById("mainContainer")
    length = data.length;
    for(i=0;  length > i ; length-- ){
    let len = length - 1;
    let noticeDiv = document.createElement('div')
    let title = document.createElement('h2')
    let message = document.createElement('p')
    let date = document.createElement('span')
    title.innerHTML =  String(data[len]['title'])
    // console.log(data[len]['message']);
    
     data[len]['description'].replace('\\n', '<br>')
     console.log(data[len]['description']);
     
    message.innerText =  data[len]['description']
    date.textContent = `Published On: ${data[len]['created_at'].split(" ")[0]}`
    noticeDiv.appendChild(title)
    noticeDiv.appendChild(message)
    noticeDiv.appendChild(date)
    mainContainer.appendChild(noticeDiv)
    noticeDiv.classList.add('notice')
    }
  })
  .catch(error => console.error('Error:', error));
