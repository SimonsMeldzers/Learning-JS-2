/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//Removes the "Virus adds" (1. task)
function removeVirus(){
    const sponsorsDiv = document.querySelector('.promo__adv');
    const sponsorsAdds = sponsorsDiv.getElementsByTagName('img');   
  
    for(let i = sponsorsAdds.length - 1; i >= 0 ; i--){
        sponsorsAdds[i].remove();
    }
}
// Replaces the genre of promoted movie (2. task)
function replaceGenre(){
    const promoGenre = document.querySelector('.promo__genre');
    promoGenre.textContent = 'драма';    
}
//Replaces the background image of promoted movie (3. task)
function replaceBg(){
    const promoBg = document.querySelector('.promo__bg');
    promoBg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';
}
//Changes the promo movie list in alphabetical order + adds numbers(4. and 5. tasks)
function changeList(){
    const sortedMovies = movieDB.movies.sort(); 

    const promoInteractiveItems = document.querySelectorAll('.promo__interactive-item');
    for(let i = 0; i <= promoInteractiveItems.length - 1 ; i++){
        promoInteractiveItems[i].textContent = (i+1) + '. ' + sortedMovies[i];
    }
}


//Removes the "Virus adds"
removeVirus();
// Replaces the genre of promoted movie
replaceGenre();
//Replaces the background image of promoted movie
replaceBg();
//Changes the promo movie list in alphabetical order + adds numbers
changeList();



