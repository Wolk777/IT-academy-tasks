var Start = (function(){
    /*********************************** view ***********************************/
    let view = {
        overlay : document.getElementById('modal-overlay'),
        
        openModalWindow: function(key) { 
            let overlay = document.getElementById('modal-overlay');
            key.classList.remove('modal_closed');
            view.overlay.classList.remove('modal_closed');
        }, 

        closeModalWindow: function(key) {
            let overlay = document.getElementById('modal-overlay');        
            key.classList.add('modal_closed');
            view.overlay.classList.add('modal_closed');
        },

        helloMenu: function(name, date) {
            let field = document.createElement('div'),
                p1 = document.createElement('p'),
                p2 = document.createElement('p'),
                clearLink = document.createElement('a');
                container = document.getElementById('container');

            p1.innerHTML = `Hello, ${name}!!!`;
            p2.innerHTML = `Your Birthday on ${date}.`;
            clearLink.innerHTML = `clear data`;
            clearLink.setAttribute('href', '#');
            clearLink.setAttribute('id', 'clear');
            field.setAttribute('id', 'field');

            field.appendChild(p1);
            field.appendChild(p2);
            field.appendChild(clearLink);
            container.appendChild(field);
        },  

        clearField: function() {
            let field = document.getElementById('field');
            field.innerHTML = "Здесь ничего больше нет"
        }         
    };

    /*********************************** model ***********************************/
    let model = {
        getData: function() {
            this.inptArr = document.getElementsByTagName('input');

            if (window.localStorage.getItem('userData')) {
                let userData = JSON.parse(window.localStorage.getItem('userData'));
                let birthString = `${userData['birth-day']}/${userData['birth-month']}/${userData['birth-year']}`;
                let name =  `${userData['name']}`;
                view.helloMenu(name, birthString);
            }else{
                setTimeout(function(){model.openModal('modal');}, 1000);
            }
        }, 

        clearField: function() {
            view.clearField();
            window.localStorage.removeItem('userData');
        },

        check: function(){
            let flag = 1;
            for (var i = 0; i < model.inptArr.length; i++) {
                if(!model.inptArr[i].validity.valid){
                    flag = 0;
                }
            };

            if(flag){
                model.saveData();
                model.closeModal();
            }
        },

        saveData: function() {
            let userData = {};
            for (let i = 0; i < model.inptArr.length; i++) {
                let name = model.inptArr[i].getAttribute('id');
                let val = model.inptArr[i].value;
                userData[name] = val;
            };

            window.localStorage.setItem('userData', JSON.stringify(userData));
        },           

        openModal: function(key) {
            model.modal = document.getElementById(key);
            view.openModalWindow(model.modal);
        },

        closeModal: function() {
            view.closeModalWindow(model.modal);
        },

        fillModal: function(a,b){
            let mod = document.querySelector('#superTitleContent');   
            let title = mod.querySelector('h2');
            let main = mod.querySelector('main');

            title.innerHTML = a;
            main.innerHTML = b;
            model.openModal('superTitleContent');
        },    

        createModal: function(a,b){
            let newModal = document.createElement('div');
            let title = document.createElement('header');
            let main = document.createElement('main');

            title.innerHTML = `<h2>${a}</h2><a href="#" class="modal__close close" id="modal5-close"\
            title="Закрыть модальное окно">Закрыть</a>`;
            
            if(model.checkAddress(b)){
                // main.innerHTML = `<div class= "player"><iframe width="560" height="315" src=${b}\
                // frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            main.innerHTML =`<object style="width:100%;height:100%;width: 560px; height: 315px; float: none; clear: both; margin: 2px auto;" data=${b}></object>`

            }else{
                main.innerHTML = `<div width="560" height="315">${b}</div>`;
            };
            
            newModal.setAttribute('id', 'newModal');

            newModal.appendChild(title);
            newModal.appendChild(main);
            superTitleContent.after(newModal);

            document.getElementById('modal5-close').addEventListener('click', function(){controller.closeModal();});
            document.getElementById('modal5-close').addEventListener('click', function(){body.removeChild(newModal);});

            newModal.classList.add('modal');
            newModal.classList.add('modal_closed');
            newModal.style.height = '500px';
            newModal.style.padding = '20px';

            model.openModal('newModal');
        },

        checkAddress:function (str) {
          var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
          return pattern.test(str);
        }    
    }

    /*********************************** controller ***********************************/
    let controller = {
        events: function (){
            let arrClose = document.querySelectorAll('.modal__close'); 
            let clearData = document.getElementById('clear');
            let btnSave = document.getElementById('modal-save');
            let btnCancel = document.getElementById('modal-cancel'); 

            btnSave.addEventListener('click', function(){
                model.check();
            });           

            btnCancel.addEventListener('click', function(){
                controller.closeModal();
            });   

            for (var i = 0; i < arrClose.length; i++) {
                arrClose[i].addEventListener('click', controller.closeModal)
            };

            if(clearData){
                clearData.addEventListener('click', function(){
                    model.clearField();
                });
            };  

            controller.checkAttribute();              
        },

        checkAttribute: function(){
            let arrAttribute = document.querySelectorAll('[data-supermodal]');
            let arrAttributeTitle = document.querySelectorAll('[data-supermodal-title]');       
            for (var i = 0; i < arrAttribute.length; i++) {
                if(arrAttribute[i].dataset.supermodal && !arrAttribute[i].dataset.supermodalTitle && !arrAttribute[i].dataset.supermodalContent)
                arrAttribute[i].addEventListener('click', function(e){
                    e.preventDefault();
                    controller.openModal(this.dataset.supermodal);
                });
            };

            for (var i = 0; i < arrAttributeTitle.length; i++) {
                if(!arrAttributeTitle[i].dataset.supermodal && arrAttributeTitle[i].dataset.supermodalTitle && arrAttributeTitle[i].dataset.supermodalContent)
                arrAttributeTitle[i].addEventListener('click', function(e){
                    e.preventDefault();                      
                    controller.fillModal(this.dataset.supermodalTitle, this.dataset.supermodalContent);
                });
            };

            for (var i = 0; i < arrAttributeTitle.length; i++) {
                if(arrAttributeTitle[i].dataset.supermodal && arrAttributeTitle[i].dataset.supermodalTitle && arrAttributeTitle[i].dataset.supermodalContent)
                arrAttributeTitle[i].addEventListener('click', function(e){
                    e.preventDefault();                    
                    controller.createModal(this.dataset.supermodalTitle, this.dataset.supermodalContent);
                });
            };
        },

        openModal: function(key){
            model.openModal(key);
        },

        fillModal: function (a, b){
            model.fillModal(a, b);
        },

        createModal: function (a, b){
            model.createModal(a, b);
        },

        closeModal: function(){
            model.closeModal();
        } 
    };

    /* --------------------- initialize function ----------------- */
    var app = {

        init: function () {
            app.main();
            app.event();
        },

        main: function () {
            model.getData();
        },

        event: function () {
            controller.events();
        },
    };

    return app.init;
})();


