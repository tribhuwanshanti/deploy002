
fetch('https://app.stsss.edu.np/api/notices')
  .then(response => response.json())
  .then(data => {
    let headerNotice = document.querySelector('#noticeHeaderSliding')
    let length = data.length - 1 
    headerNotice.innerHTML = data[length].description;
  })
  .catch(error => console.error('Error:', error));

fetch('https://app.stsss.edu.np/api/notices')
  .then(response => response.json())
  .then(data => {
    let mainContainer = document.getElementById("mainContainer")
    length = data.length;
    let i = data.length - 3;
    for(i; length > i ; length-- ){
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

  

