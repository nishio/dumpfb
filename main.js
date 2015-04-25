var gui = require('nw.gui');
var win = gui.Window.get();

var fs = require('fs');
var ws = fs.createWriteStream('activity.txt')

function dump(){
  var document = win.window.document;
  document.getElementsByClassName('uiMorePagerPrimary')[0].click();
  var boxes = document.getElementsByClassName('uiBoxWhite');
  var N = boxes.length;
  console.log(N);
  for(var i = 0; i < N; i++){
    var box = boxes[i];
    ws.write(box.innerHTML + '\n\n');
  }
  for(var i = 0; i < N; i++){
    var box = boxes[0];
    box.parentNode.removeChild(box);
  }
  win.window.setTimeout(dump, 1000);
}


var menu = new gui.Menu({ 'type': 'menubar' });
menu.append(new gui.MenuItem({ label: 'dump' }));
menu.items[0].click = dump;
win.menu = menu;

// for easy debug
// document.location = 'https://www.facebook.com/nishiohirokazu/allactivity?privacy_source=activity_log_top_menu';
document.location = 'https://www.facebook.com/';
