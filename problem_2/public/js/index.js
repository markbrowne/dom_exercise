window.onload = () => {
  var total = 0;
  const req = new XMLHttpRequest();
  req.open('GET', '/users');
  req.responseType = 'json';
  req.addEventListener('load', (e) => {
    // TODO: Solve exercise
    getAll(e.target.response,total,logValue)
  });
  req.send();
};


function getAll(resp,total,callback){
  resp.forEach((element,index,array)=>{
    const req = new XMLHttpRequest();
    req.open('GET', '/users/'+element.id);
    req.responseType = 'json';
    req.addEventListener('load', (ev) => {
      total += ev.target.response.likes
      if(index == array.length -1)
        callback(total)
    });
    req.send();
  })
}

function logValue(total){
  document.getElementById('total-likes').innerText = total;
}
