const Intro = document.getElementById(`Intro`);
const Collection = document.getElementById(`Collection`);
const Article = document.getElementById(`Article`);

const Intro_Input = Intro.querySelector(`input`);
const Intro_Label = Intro.querySelector(`label`);
const Intro_Btn = Intro.querySelector(`button`);

const LeftScroll = document.getElementById(`LeftScroll`);
const RightScroll = document.getElementById(`RightScroll`);

const Article_Input = Article.querySelector(`input`);
const Article_Label = Article.querySelector(`label`);
const Article_Btn = Article.querySelector(`button`);


Intro_Btn.onclick = () => {
    const Input = Intro_Input.value
    if (Input === ``) {

        Intro_Input.style.border = `1px solid red`;
        Intro_Label.textContent = `Pease enter a valid email!`;
        Intro_Label.style.color = `red`;

        setTimeout(function () {
            Intro_Input.style.border = `1px solid gray`;
            Intro_Label.textContent = `Email address`;
            Intro_Label.style.color = `#fff`;
        }, 2500)
    }

    else if (Input.includes(`@`) === false) {
        
        Intro_Input.value = ``;

        Intro_Input.style.border = `1px solid red`;
        Intro_Label.textContent = `Pease enter a valid email!`;
        Intro_Label.style.color = `red`;

        setTimeout(function () {
            Intro_Input.style.border = `1px solid gray`;
            Intro_Label.textContent = `Email address`;
            Intro_Label.style.color = `#fff`;
        }, 2500)
    }

    else if (Input !== `` && Input.includes(`@`) === true) {
        Intro_Input.value = ``;
    }
}

Article_Btn.onclick = () => {
    const Input = Article_Input.value
    if (Input === ``) {

        Article_Input.style.border = `1px solid red`;
        Article_Label.textContent = `Pease enter a valid email!`;
        Article_Label.style.color = `red`;

        setTimeout(function () {
            Article_Input.style.border = `1px solid gray`;
            Article_Label.textContent = `Email address`;
            Article_Label.style.color = `#fff`;
        }, 2500)
    }

    else if (Input.includes(`@`) === false) {

        Article_Input.value = ``;
        
        Article_Input.style.border = `1px solid red`;
        Article_Label.textContent = `Pease enter a valid email!`;
        Article_Label.style.color = `red`;

        setTimeout(function () {
            Article_Input.style.border = `1px solid gray`;
            Article_Label.textContent = `Email address`;
            Article_Label.style.color = `#fff`;
        }, 2500)
    }

    else if (Input !== `` && Input.includes(`@`) === true) {
        Article_Input.value = ``;
    }
}

LeftScroll.onclick = () => {
    Collection.scrollLeft -= 450;
    Collection.style.scrollBehavior = `smooth`
}

RightScroll.onclick = () => {
    Collection.scrollLeft += 450;
    Collection.style.scrollBehavior = `smooth`
}


const FAQs = document.querySelectorAll(`.FAQ`);
const Icons = document.getElementById(`FAQ`).querySelectorAll(`span`);

FAQs.forEach(faq => {
    faq.onclick = () => {
        faq.lastElementChild.classList.toggle(`Answer`);
        faq.lastElementChild.classList.toggle(`Block`);

        faq.firstElementChild.lastElementChild.classList.toggle(`Rotate`);
        faq.firstElementChild.lastElementChild.classList.toggle(`Plus`);
    }
})