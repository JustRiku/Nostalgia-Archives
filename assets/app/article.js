let datos2;

fetch('assets/data/data2.json')
.then(res => res.json())
.then(data => {
    let flex = document.querySelector(".flexsection");
    datos2 = data;
    data.forEach((item, index) => {
        let push=`<div class="flexarticle flex${item.id}" id="${index}">
            <div class="fleximg">
                <img src="${item.img}" alt="fleximg"/>
            </div>
            <div class="textarticle">
                <h2 class="articletitle">${item.title}</h2>
                <p class="author">${item.author}</p>
                <p class="description">${item.description}</p>
            </div>
        </div>`;
        flex.innerHTML += push;
    });
})
.then(() => {
    let articles2 = document.querySelectorAll(".flexarticle");
    articles2.forEach((item) => {
        item.addEventListener('click', openArticle2, true)
    })
});


let dynamic = document.querySelector(".dynamic");

let openArticle2 = (e) => {
    let articleSel = datos2[Number(e.currentTarget.id)];
    dynamic.innerHTML= `
    <div class="dynamicflex">
        <img src="${articleSel.img}" alt="dynamicimg" />
        <div class="textarticle">
            <h2 class="articletitle">${articleSel.title}</h2>
            <p class="author">${articleSel.author}</p>
            <p class="description">${articleSel.description}</p>
        </div>
    </div>`
}

let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("nav-ul");

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
})