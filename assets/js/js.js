
const buyBtns = document.querySelectorAll('.js-buy-ticket') 
const modal = document.querySelector('.js-modal')

const showMessageBtns = document.querySelectorAll('.js-show-message')
function showMessage(){
    alert("content: " + "hello world!") 
}

for(const showMessageBtn of showMessageBtns){
    showMessageBtn.addEventListener('click', showMessage )
}

function showBuyTickets(){
    modal.classList.add('open') 
    document.getElementById('modal-body-id').insertAdjacentHTML('beforeend', 
    ' <label for="ticket-quantity" class="modal-label"> Text box </label> <input id="ticket-quantity" type="text" class="modal-input" placeholder="Input"><a class="place-buy-btn" target="_blank" href="https://www.google.com.hk/" >Redirect page</a><button onclick="openNewBrowser()" class="place-buy-btn">Open new browser</button>' );
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets )
}

const modalClose = document.querySelector('.js-modal-close')

function hideBuyTickets(){
    var tg = document.getElementById('modal-body-id')
    tg.innerHTML = "";
    modal.classList.remove('open')

}

modalClose.addEventListener('click',hideBuyTickets)

modal.addEventListener('click',hideBuyTickets)

const modalContainer = document.querySelector('.js-modal-container')

modalContainer.addEventListener('click', function(event){
    event.stopPropagation() //ngừng quá trình nổi bọt
})

function openNewBrowser() {
    window.open("https://www.w3schools.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1200,height=600");
}