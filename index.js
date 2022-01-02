document.querySelector('.grid-btn').addEventListener('click',function(){
    let grid_view = document.querySelector('.grid-view')
    let list_view = document.querySelector('.list-view')
    grid_view.style.display="flex"
    list_view.style.display = 'none'
})
document.querySelector('.list-btn').addEventListener('click',function(){
    let list_view = document.querySelector('.list-view')
    let grid_view = document.querySelector('.grid-view')
    grid_view.style.display="none"
    list_view.style.display='block'
})