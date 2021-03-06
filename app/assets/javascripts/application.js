// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require_tree .
//= require twitter/bootstrap
//= require bootstrap-table
//= require turbolinks

function showBusyIndicator(text) {
    if (text) {
        $('.busyIndicator').html('<i class="fa fa-cog fa fa-cog fa-spin fa-2x fa-fw stateIcon"></i>' + text);
    }

    $('.busyIndicator').show();
}

function hideBusyIndicator() {
    $('.busyIndicator').hide();
}

function showDangerIndicator(text) {
    if (text) {
        $('.dangerIndicator').html('<i class="fa fa-warning fa-2x fa-fw stateIcon"></i>' + text);
    }

    $('.dangerIndicator').show();

    setTimeout(function(){
        $(".dangerIndicator").fadeOut("slow");
    }, 5000)
}

function hideDangerIndicator() {
    $('.dangerIndicator').hide();
}


function showSuccessIndicator(text) {
    if (text) {
        $('.successIndicator').html('<i class="fa fa-check-circle-o fa-2x fa-fw stateIcon"></i>' + text);
    }

    $('.successIndicator').show();

    setTimeout(function(){
        $(".successIndicator").fadeOut("slow");
    }, 3500)
}
