/*================================= 1 =================================*/
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let tableThead = document.querySelector('thead');
    function thEl(content){
        let th = document.createElement('th');
        th.innerText = content;
        return th;
    }
    booksArray.forEach(book=>{
        let trEl = document.createElement('tr');
        for (let key in book){
            trEl.appendChild(thEl(book[key]));
        }
        tableThead.appendChild(trEl);
    });

/*================================= 2 =================================*/


window.onload = function(){

    let bodyEl = document.querySelector('body');
    
    let headerTitle = document.createElement('header');
    headerTitle.innerHTML = 'Hello JS'; 
    
    bodyEl.appendChild(headerTitle);
    
    headerTitle.style.padding = '500px';                                         
    headerTitle.style.backgroundColor='yellow';
    headerTitle.style.textAlign = 'center';
    }


/*================================== 3 ================================*/
const menuData = [
{ name: 'Головна', url: '/' },
{ name: 'Про нас', url: '/about' },
{ name: 'Послуги', url: '/services' },
 ] 

    window.onload = function(){

        let bodyEl = document.querySelector('body');
        
        let headerTitle = document.createElement('header');
        headerTitle.innerHTML = 'Hello JS'; 
        
        bodyEl.appendChild(headerTitle);
        
        headerTitle.style.padding = '50px';                                         
        headerTitle.style.backgroundColor='yellow';
        headerTitle.style.textAlign = 'center';
    
         let name = ['Головна','Про нас', 'Послуги'];
    
        for(let skill of name){
    
    let hrefEl = document.createElement('a');
        hrefEl.innerHTML =`${skill}`;
        hrefEl.setAttribute('href', '/');
        hrefEl.setAttribute('href', '/about');
        hrefEl.setAttribute('href', '/service');
        headerTitle.appendChild(hrefEl);
    
       }
    
        let namefirst = document.createElement('a');
        namefirst.setAttribute('href', '/');
        namefirst.innerText ='Головна';
        headerTitle.appendChild(namefirst);
    
        let namesecond = document.createElement('a');
        namesecond.setAttribute('href', '/about');
        namesecond.innerText ='Про нас';
        headerTitle.appendChild(namesecond);
    
        let namethird = document.createElement('a');
        namethird.setAttribute('href', '/service');
        namethird.innerText ='Послуги';
        headerTitle.appendChild(namethird);
    }


/*============================== 4 ====================================*/

    window.onload = function(){

        let bodyEl = document.querySelector('body');
        
        let mainDiv = document.createElement('div');
        mainDiv.innerHTML = 'Hello JS'; 
        bodyEl.appendChild(mainDiv);
    
        mainDiv.style.display = 'flex';  
    
        for(let i=0; i<51; i++){
            let innerDiv = document.createElement('div.inner');
            innerDiv.innerHTML = 'hi';
        
            innerDiv.style.borderRadius = '6px'; 
            innerDiv.style.width = '50px'; 
            innerDiv.style.height = '50px'; 
            innerDiv.style.backgroundColor = 'red';
    
            mainDiv.appendChild(innerDiv)
        }
    }