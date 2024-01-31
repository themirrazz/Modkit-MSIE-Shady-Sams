var FSel = document.querySelector('input[type="file"]');
var upload;
function GetZIPUpload(then) {
    FSel.click();
    FSel.oninput = function () {
        upload = FSel.files[0];
        FSel.oninput = null;
        then();
    };
}