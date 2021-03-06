addEventListener('turbolinks:load', function() {
    $('[data-toggle="table"]').bootstrapTable();
    $('div#favStandings').height($('#favTeamContainer').height());

    if ($('#syncManager').data('sync-success')) {
        hideBusyIndicator();
        showSuccessIndicator();
    }

    if($('#syncManager').data('sync-team')) {
        showBusyIndicator('Syncing teams...')

        $.ajax({
            type: 'GET',
            url: '/leagues/' + $('#syncManager').data('league') + '/sync',
            data: { 
            },
            success: handleSyncSuccess,
            error: handleSyncFailure,
        });
    }
});


$(document).on('click', '.importButton', function(e){
    showBusyIndicator('Importing team...');
});

function handleSyncSuccess(d) {
    hideBusyIndicator();
    if (d.status == 'update') {
        location.replace("?synced=true");
    } else if (d.status == 'no-update') {
        showSuccessIndicator();
    }
}

function handleSyncFailure(d) {
    hideBusyIndicator();
    showDangerIndicator();
}

function favNameFormatter(value, row, index) {
    if (value == $('#standingsTableData').data('my-team')) {
        return '<strong>' + value + '</strong>'
    } else {
        return value
    }
}
