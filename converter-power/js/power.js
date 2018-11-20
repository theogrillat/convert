// animations

var dur = 1000;
var del = 100;

var an1 = anime({
    targets: '.an1',
    translateY: [
        { value: 1000, duration: 0 },
        { value: 0, duration: dur }
      ],
      opacity: [
          { value : 0, duration: 0},
          { value : 1, duration: dur + 1000}
      ],
    easing: 'easeOutQuint',
    loop: false,
    delay: 0
});

var an2 = anime({
    targets: '.an2',
    translateY: [
        { value: 800, duration: 0 },
        { value: 0, duration: dur }
      ],
      opacity: [
          { value : 0, duration: 0},
          { value : 1, duration: dur + 1000}
      ],
      easing: 'easeOutQuint',
    loop: false,
    delay: del
});

var an3 = anime({
    targets: '.an3',
    translateY: [
        { value: 600, duration: 0 },
        { value: 0, duration: dur }
      ],
    opacity: [
        { value : 0, duration: 0},
        { value : 1, duration: dur + 1000}
    ],
      easing: 'easeOutQuint',
    loop: false,
    delay: 2*del
});



// calc
    
    var data = {
        inputValue: 0,
        selectVal: "",
        screenVal: 0,
        resultType: "",
        ratio: 1.341
    }

    function checkValue() {
        data.inputValue = document.getElementById("kw").value;
    }

    function selectCheck() {
        data.selectVal = document.getElementById("select-input").value;
    }

    function calc() {
        var valUn = data.inputValue;
        var valDeux = 0;

        if (data.selectVal === "Kw") {
            valDeux = valUn * data.ratio;
            data.resultType = " Cv";
        } else {
            valDeux = valUn / data.ratio;
            data.resultType = " Kw";
        }

        valDeux = Math.round(valDeux);
        data.screenVal = valDeux;
    }

    function printVal() {
        document.getElementById("printContent").innerHTML = '<h1 class="result">'+data.screenVal+data.resultType+'</h1>';
    }

    $("#btn-go").click(function () {
        checkValue();
        selectCheck();
        calc();
        printVal();
        // console.table(data);
    });