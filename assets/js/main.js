const knopf=document.querySelectorAll('li')
const changeColor=()=>{
    console.log(knopf)

}
for (let i = 0; i< knopf.length; i++) {
  knopf[i].addEventListener('click',(ev)=>{
      let knopfId=knopf[i].id
      switch (knopfId) {
          case 'grauTaste':
            document.querySelector('body').style.background='gray';
              break;
            case 'weissTaste':
            document.querySelector('body').style.background='white';
            break;
            case 'blauTaste':
            document.querySelector('body').style.background='blue';
            break;
            case 'gelbTaste':
            document.querySelector('body').style.background='yellow';
            break;
      
          default:
              break;
      }
  })
    }