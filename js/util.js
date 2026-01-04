var count={
    cjdg: 1,
    sgdg: 1,
    td: 1,
    dztj: 4
}

function checkURL(url){
    return $.ajax({
        url: url,
        type: 'HEAD',
        timeout: 3000,
        async: false,
        cache: false,
        success: function(data,textStatus,jqxHR){
            if(jqxHR.status ==200){
                return true;
            }
            return false;
        },
        error: function () {
            return false;
        }
    });
}