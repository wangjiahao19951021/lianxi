import { ceshi } from "./ceshi1.js"
;(function () {
    let state = null
    let btn = document.querySelectorAll('button')
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            if (document.getElementsByTagName('input')[0].value == '') {
                return
            }
            state = new ceshi(document.getElementsByTagName('input')[0].value)
            if (i == 0) {
                document.getElementsByTagName('input')[0].value = state.num()
            } else if (i == 1) {
                document.getElementsByTagName('input')[0].value = state.less()
            }
        }
    }
})();