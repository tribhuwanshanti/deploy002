
async function headerNotice(){
    let response = await fetch("https://tribhuwan-admin.vercel.app/api/v1/noticeData");
    let data = await response.json();
    let headerNotice = document.querySelector('#noticeHeaderSliding')
    let length = data.length - 1 
    headerNotice.innerHTML = data[length]['message']
  }

  headerNotice()

  let mainContainer = document.getElementById("mainContainer")

  async function getData() {
    let response = await fetch("https://tribhuwan-admin.vercel.app/api/v1/noticeData");
    let data = await response.json();
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
    
    
    message.innerHTML =  data[len]['message']
    date.textContent = `Published On: ${data[len]['createdAt'].split(":")[0].split('T')[0]}`
    noticeDiv.appendChild(title)
    noticeDiv.appendChild(message)
    noticeDiv.appendChild(date)
    mainContainer.appendChild(noticeDiv)
    noticeDiv.classList.add('notice')
    }
  
  }
  
  getData()
