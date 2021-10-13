$(window).on("load", assignEvents);
$(window).on("load", assignEventsImg);

function assignEvents() {
    $("#showContainer").on("click", showItem);
    
}

function assignEventsImg() {
    $("#showContainerImg").on("click", showItemImg);
    
}

function showItem() {
    $('#containerHidden').show("slow");
}

function showItemImg() {
    $('#containerHiddenImg').show("slow");
}


      