
import mod from "./module.js"

let obj = {
    age: 20
}
obj = new Proxy(
    {},
    {
        get: (obj, prop) => {
            console.log('get')
            // 获取该属性时触发
            return obj[prop];
        },
        set: (obj, prop, value) => {
            console.log('set')
            // 设置该属性值时触发
            obj[prop] = value;
            return true;
        }
    }
);

document.querySelectorAll(".change")[0].addEventListener("click", function name() {
    // 此处其实是监听obj中a的值得改变，此处就用click代替了改变
    obj.age = 25;
    console.log(obj.age); // 20
}, false)

let count = new mod.loops().haha()
document.querySelectorAll(".choujiang")[0].addEventListener("click", function name() {
    count.next()
}, false)

document.querySelectorAll(".yibu")[0].addEventListener("click", function name() {
    new mod.ceshi()
}, false)

document.querySelectorAll(".yincang")[0].addEventListener("click", function name() {
    this.innerText = new mod.yincang(this.innerText, 6).str
}, false)

document.querySelectorAll(".jicheng")[0].addEventListener("click", function name() {
    new mod.lei_zi('陈', 30)
}, false)

document.querySelectorAll(".zhuanhuan")[0].addEventListener("click", function name() {
    new mod.zhuanhuan()
}, false)



export default {

};


