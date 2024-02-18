function changeColor(btnId) {

  document.querySelectorAll('.default-btn').forEach(btn => {

    btn.classList.remove('active-btn');
  });


  document.getElementById(btnId).classList.add('active-btn');
};
// console.log(document.querySelectorAll('.default-btn'))








fetch(`http://localhost:6464/Kreditler`)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then(function (datas) {
    const kreditlerDiv = document.querySelector('.kredit');
    let inner = "";
    for (let kredit of datas) {
      // console.log(kredit);
      inner += `
      <div class="card">     
      <div class="inner">
      <div class="img">
      <i class="${kredit.icon}"></i>
  </div>   
        <h2>${kredit.title}</h2>
        <p>${kredit.items}</p>
        <div class="buttons">
        <button class="button-apply" onclick="${kredit.button1.action}('${kredit.button1.link}')">${kredit.button1.text}</button>
        <button class="button-details">${kredit.button2.text}</button>
        
        </div>
        </div>
      </div>
      `;
    }
    kreditlerDiv.innerHTML = inner;
  });
  function applyAction(link) {
    window.location.href = link;
}
function detailsAction() {
    // console.log("Ətraflı məlumatlar...");
}


  fetch(`http://localhost:6464/Emanetler`)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then(function (datas) {
    const emanetDiv = document.querySelector('.emanet');
    let inner = "";
    for (let emanet of datas) { 
      // console.log(emanet); 
      inner += `
      <div class="card">     
        <div class="inner">
          <div class="img">
            <i class="${emanet.icon}"></i>
          </div>   
          <h2>${emanet.title}</h2>
          <p>${emanet.items}</p>
          <div class="buttons">
            <button class="button-apply">${emanet.btn}</button>
          </div>
        </div>
      </div>
      `;
    }
   emanetDiv.innerHTML = inner;
  });

  fetch(`http://localhost:6464/News`)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then(function (datas) {
    const newsDiv = document.querySelector('.news');
    let inner = "";
    for (let news of datas) { 
      // console.log(news); 
      inner += `
      <div class="card">     
        <div class="inner">  
          <h3>${news.title}</h3>
          <p>${news.item}</p>
          <span>${news.date}</span>
        </div>
      </div>
      `;
    }
    newsDiv.innerHTML = inner;
  });

