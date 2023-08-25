
const desk_feature =document.querySelector('.feature');
const desk_feature_menuitem = document.querySelector('.feature .menuitem');
const desk_feature_icon = document.querySelector('#feature_icon');
const desk_company_menuitem = document.querySelector('.company .menuitem');
const desk_company_icon = document.querySelector('#company_icon');
const desk_company = document.querySelector('.company');
const overlay = document.querySelector('.overlay_container');
let current_menuitem="", isOpen = false;
const desk_view = window.matchMedia("(min-width: 769px)");

// Variable for mobile view setting.
const mob_menu = document.querySelector('#menu_id');
const mob_close = document.querySelector('#mobile_close_id');
const mob_menu_container = document.querySelector('.mobile_menu_container');
const mob_feature_menuitem = document.querySelector('.mob_feature .mob_menuitem');
const mob_feature_icon = document.querySelector('#mob_feature_icon');
const mob_company_menuitem = document.querySelector('.mob_company .mob_menuitem');
const mob_company_icon = document.querySelector('#mob_company_icon');
const mob_feature =document.querySelector('.mob_feature');
const mob_company = document.querySelector('.mob_company');
let mob_current_menuitem="",mob_isOpen = false;
const mob_view = window.matchMedia("(max-width: 768px)");


desk_feature.addEventListener('click', function(){

    if(current_menuitem.length === 0 && !isOpen)
    {
        desk_feature_icon.src = "../images/icon-arrow-up.svg";
        desk_feature_menuitem.classList.remove('hide');
        current_menuitem = "feature";
        isOpen = true;
    }
    else if(current_menuitem.length > 0 && isOpen){

        if(current_menuitem.match("feature"))
        {
            desk_feature_icon.src = "../images/icon-arrow-down.svg";
            desk_feature_menuitem.classList.add('hide');
            current_menuitem = "";
            isOpen = false;   
        }
        else if(current_menuitem.match("company")){
            desk_company_icon.src= "../images/icon-arrow-down.svg";
            desk_company_menuitem.classList.add('hide');

            desk_feature_icon.src = "../images/icon-arrow-up.svg";
            desk_feature_menuitem.classList.remove('hide');
            current_menuitem = "feature";
            isOpen = true;
        }

    }
    
});

desk_company.addEventListener('click', function(){

    if(current_menuitem.length === 0 && !isOpen)
    {
        desk_company_icon.src = "../images/icon-arrow-up.svg";
        desk_company_menuitem.classList.remove('hide');
        current_menuitem = "company";
        isOpen = true;
    }
    else if(current_menuitem.length > 0 && isOpen){

        if(current_menuitem.match("feature"))
        {
            desk_feature_icon.src = "../images/icon-arrow-down.svg";
            desk_feature_menuitem.classList.add('hide');

            desk_company_icon.src= "../images/icon-arrow-up.svg";
            desk_company_menuitem.classList.remove('hide');
            current_menuitem = "company";
            isOpen = true;   
        }
        else if(current_menuitem.match("company")){
            desk_company_icon.src= "../images/icon-arrow-down.svg";
            desk_company_menuitem.classList.add('hide');
            current_menuitem = "";
            isOpen = false;
        }

    }

});

mob_menu.addEventListener('click', function(){
    overlay.classList.remove('hide');
    mob_menu_container.classList.remove('hide_with_space_removed');
});

mob_close.addEventListener('click', function(){
    overlay.classList.add('hide');
    mob_menu_container.classList.add('hide_with_space_removed');
})

mob_feature.addEventListener('click', function(){
    if(mob_current_menuitem.length === 0 && !mob_isOpen)
    {
        mob_feature_icon.src = "../images/icon-arrow-up.svg";
        mob_feature_menuitem.classList.remove('hide_with_space_removed');
        mob_current_menuitem = "mob_feature";
        mob_isOpen = true;
    }
    else if(mob_current_menuitem.length > 0 && mob_isOpen){

        if(mob_current_menuitem.match("mob_feature"))
        {
            mob_feature_icon.src = "../images/icon-arrow-down.svg";
            mob_feature_menuitem.classList.add('hide_with_space_removed');
            mob_current_menuitem = "";
            mob_isOpen = false;   
        }
        else if(mob_current_menuitem.match("mob_company")){
            mob_company_icon.src= "../images/icon-arrow-down.svg";
            mob_company_menuitem.classList.add('hide_with_space_removed');

            mob_feature_icon.src = "../images/icon-arrow-up.svg";
            mob_feature_menuitem.classList.remove('hide_with_space_removed');
            mob_current_menuitem = "mob_feature";
            mob_isOpen = true;
        }

    }
});

mob_company.addEventListener('click', function(){
    if(mob_current_menuitem.length === 0 && !mob_isOpen)
    {
        mob_company_icon.src = "../images/icon-arrow-up.svg";
        mob_company_menuitem.classList.remove('hide_with_space_removed');
        mob_current_menuitem = "mob_company";
        mob_isOpen = true;
    }
    else if(mob_current_menuitem.length > 0 && mob_isOpen){

        if(mob_current_menuitem.match("mob_feature"))
        {
            mob_feature_icon.src = "../images/icon-arrow-down.svg";
            mob_feature_menuitem.classList.add('hide_with_space_removed');

            mob_company_icon.src= "../images/icon-arrow-up.svg";
            mob_company_menuitem.classList.remove('hide_with_space_removed');
            mob_current_menuitem = "mob_company";
            mob_isOpen = true;   
        }
        else if(mob_current_menuitem.match("mob_company")){
            mob_company_icon.src= "../images/icon-arrow-down.svg";
            mob_company_menuitem.classList.add('hide_with_space_removed');
            mob_current_menuitem = "";
            mob_isOpen = false;
        }

    }

});

mob_view.addEventListener('change', function(){
    isOpen=false;
    current_menuitem="";
    desk_feature_menuitem.classList.add('hide');
    desk_company_menuitem.classList.add('hide');
});

desk_view.addEventListener('change',function(){
    mob_isOpen=false;
    mob_current_menuitem="";
    mob_feature_menuitem.classList.add('hide_with_space_removed');
    mob_company_menuitem.classList.add('hide_with_space_removed');
    overlay.classList.add('hide');
    mob_menu_container.classList.add('hide_with_space_removed');
});
