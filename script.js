function dump(){
    h2 = document.querySelector("h2");
    textarea = document.createElement("textarea");
    h2.append(textarea);
    function f(){
        document.getElementsByClassName('uiMorePagerPrimary')[0].click();
        var boxes = document.getElementsByClassName('uiBoxWhite');
        var N = boxes.length;
        console.log(N);
        for(var i = 0; i < N; i++){
            var box = boxes[i];
            textarea.value += (box.innerHTML + '\n\n');
        }
        for(var i = 0; i < N; i++){
            var box = boxes[0];
            box.parentNode.removeChild(box);
        }
        setTimeout(f, 1000);
    }
    f();
}
