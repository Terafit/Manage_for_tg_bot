//Тут я получил input и кнопку
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');

//Тут я формировал строку запроса
const token = 'YOUR TOKEN';
const api = 'https://api.telegram.org/bot';
const id = '/sendMessage?chat_id=ТУТА АЙДИ ЧАТА&text='

//тут я слушаю нажатие кнопки и нажатие клавиши Enter и вызываю функци. sendMes()
btn.addEventListener('click', sendMes)
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        sendMes();
    }
})

//Главаная функция
function sendMes() {
    //Забираем значение введённое в input
    let value = inp.value;
    //Проверяем, если строка пустая возращаем false. Проще говоря ничего не делаем(функция обрывается)
    if (value === "") return false;
    //Тут формируем url
    let url = api + token + id;
    //Создаём XMLHttpRequest - запрос(ссылка на документации ниже)
    let xhr = new XMLHttpRequest();
    //Открываем с помощбю метода Get наш url
    xhr.open('GET', url + value, false);
    //И отправляем
    xhr.send();
    //Тут я отчизаю строку input
    inp.value = "";
}

/* Чтобы узнать id чата введите следущее в url строку

    https://api.telegram.org/bot"YOUR TOKEN"/getUpdates
    https://api.telegram.org/bot1108584255:AAdgjksdKPCAxLjehgsdakjEQPWK4E/getUpdates

    Потом добовляете бота в чат и у вас выйдет вот такое сообщение в браузере

{"update_id":26407436173,
"message":{"message_id":3,"from":{"id":37кег1255,"is_bot":false,"first_name":"xxx","username":"gj2go","language_code":"ru"},"chat":
{"id":-1rqwrqw933,"title":"\u0414\u0410 \u041d\u0423\u0423\ud83d\ude2e Chat","type":"supergroup"},"date":086q15069,"new_chat_participant":
{"id":110455,"is_bot":true,"first_name":"CAIH","username":"CAIH_bot"},"new_chat_member":
{"id":82855,"is_bot":true,"first_name":"CAIH","username":"CAIH_bot"},"new_chat_members":[{"id":qwfddg,"is_bot":true,"first_name":"CAIH","username":"CAIH_bot"}]}}

Ищем "chat" в нём "id". Этот id отличается от всех остальных наличием " - " , и вставляем в поле Айди в коде

*/


//Ссылка на разбор XMLHttpRequest() - https://learn.javascript.ru/xmlhttprequest