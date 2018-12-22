/*Dropdown Menu*/

$(document).ready(function() {

    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/

});

var UID = {
    _current: 0,
    getNew: function(){
        this._current++;
        return this._current;
    }
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
    var _this = this;
    var _sheetId = "pseudoStyles";
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    var className = "pseudoStyle" + UID.getNew();

    _this.className +=  " "+className;

    _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
    _head.appendChild(_sheet);
    return this;
};


function updateProgress() {
    let progressContent = `   
                        <label for="energy">Energy: ${player.energy}</label>
                        <div id="energy" class="progress"></div>
                        
                        <label for="respect">Respect: ${player.respect}</label>
                        <div id="respect" class="progress"></div>
                        
                        <label for="cash">Cash: ${player.cash}</label>
                        <div id="cash" class="progress"></div>
                        
                        <label for="mood">Mood: ${player.mood}</label>
                        <div id="mood" class="progress"></div>`
    PlayerProgress.innerHTML = progressContent

        setProgress();
}
function setProgress() {
    for(let property in player) {
        let maxProperty = 150;
        if (property == "cash") maxProperty = 1500;
        let div = document.getElementById(property);
        let newWidth = player[property] * 100 / maxProperty
        div.pseudoStyle("before", "width", newWidth + "%");
    }
}