/**
 * Created by m.bortolotti on 07/07/2016.
 */

var panel = '<div data-role="panel" id="panelMenu" data-display="overlay"><h2>Panel Header</h2><p>You can close the panel by clicking outside the panel, pressing the Esc key or by swiping.</p></div>';

$(document).one('pagebeforecreate', function () {
    $.mobile.pageContainer.prepend(panel);
    $("#panelMenu").panel().enhanceWithin();
});