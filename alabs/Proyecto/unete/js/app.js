Ti.UI.setBackgroundColor("#fff")

var ventana = Ti.UI.createWindow({

});
var web = Titanium.UI.createWebView({
url:'pagina.html'
});

ventana.add(web);
ventana.open();
