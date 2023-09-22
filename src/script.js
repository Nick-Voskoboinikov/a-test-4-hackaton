const headerNotification=document.querySelector('.header__output');
const inputText=document.querySelector('.input-wrapper>input[type="text"]');
const micBtn=document.querySelector('.footer__speaker-button');
const speech=document.querySelector('.waves-pic');

micBtn.addEventListener('click', () => {
    let isSpeaking=micBtn.getAttribute('data-mic-on');
    if(isSpeaking === 'false') {
        speech.style.display='block';
        inputText.style.visibility='none';
        inputText.style.display='none';
        micBtn.setAttribute('data-mic-on','true');
        setTimeout(function() {
            headerNotification.setAttribute('data-asked','true');
            headerNotification.innerText='Незнайка, а почему все переверну...';
        }, 750);
    }
    if(isSpeaking === 'true') {
        speech.style.display='none';        

        setTimeout(function() {
            inputText.style.visibility='visible';
            headerNotification.innerText='Это, наверно, не Луна перевернулась, а мы сами перевернулись.';
            micBtn.setAttribute('data-mic-on','received');
        }, 1500);
    }
    if(isSpeaking === 'received') {
        setTimeout(function() {clearInputs();}, 750);
    }
});

inputText.addEventListener('keypress', (event) => {
    if(event.keyCode === 13){
        event.preventDefault();
        let question='Незнайка, '+inputText.value;

        headerNotification.setAttribute('data-asked','true');
        headerNotification.innerText=question;
        inputText.style.visibility='hidden';
        inputText.value='';
        setTimeout(function() {clearInputs();}, 3500);
    }
  });

  function clearInputs(){
            headerNotification.innerText='';
            headerNotification.setAttribute('data-asked','false');
            inputText.style.visibility='visible';
            micBtn.setAttribute('data-mic-on','false');
            inputText.style.display='block';
  }

