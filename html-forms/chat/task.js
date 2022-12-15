
let chatWidget = document.getElementsByClassName("chat-widget")
let chatWidgetSide = document.getElementsByClassName("chat-widget__side")
let messages = document.querySelector( '.chat-widget__messages');
let spisokOtvetov =["Ты кто", "Я вас незнаю", "Зачем вы нам пишите", "Идите отдохните","Может вам стоит передохнуть?"]


chatWidgetSide[0].addEventListener("click", fuhcChatWidgetSide => {
  chatWidget[0].classList.add ("chat-widget_active")

  messages.innerHTML += `
  <div class="message">
      <div class="message__time">09:21</div>
      <div class="message__text">
        Добрый день, мы ещё не проснулись. Позвоните через 10 лет
      </div>
  </div>
  <div class="message message_client">
      <div class="message__time">21:10</div>
      <div class="message__text">Добрый день! Хочу купить розы для любимой!</div>
    </div>
  </div>
`;
  console.log(messages);
})
//messages.classList.remove ("message_client")

let chatWidgetInput = document.getElementById("chat-widget__input")

chatWidgetInput.addEventListener ("keydown", function(e) {
  if(e.code === "Enter") {
    if (chatWidgetInput.value.trim() != "") {
      let text = chatWidgetInput.value
      // chatWidgetInput.value = ""
      console.log (text)
      let dates = new Date()
      const HH = ("0" + dates.getHours()).slice(-2)
      const MM = ("0" + dates.getMinutes()).slice(-2)

      messages.innerHTML += `
      <div class="message message_client">
          <div class="message__time">${HH}:${MM} </div>
          <div class="message__text"> ${text}    </div>
      </div>
        `;
      let min = 0
      let max = spisokOtvetov.length-1
      let chisloSl = (Math.random () * (max - min + 1)) + min
      let slFraza = spisokOtvetov[Math.round(chisloSl)]
      console.log (slFraza)
     
      // setTimeout ((
        messages.innerHTML += `
        <div class="message">
        <div class="message__time">${HH}:${MM} </div>
            <div class="message__text">
            ${slFraza}
            </div>
        </div>
      `
      // ),
      //  1000
      // )

    }
    console.log(messages);
    chatWidgetInput.value = ""
  }
})