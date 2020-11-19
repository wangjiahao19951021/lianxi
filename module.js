


// 转换字符串
class zhuanhuan {
    constructor() {
        this.init()
    }
    init() {
        this.ob()
    }
    ob() {
        let credits = {
            producer: '大迁世界',
            name: '陈陈陈',
            rating: 9
        }
        console.log(Object.entries(credits))
        console.log(Object.values(credits))
    }
}

//此处是使for循环暂停 例如抽奖
class loops {
    * haha() {
        for (var i = 0; i < 5; i++) {
            yield console.log(i + '抽奖')
        }
    }
}

// 异步同步 promise
class ceshi {
    constructor() {
        this.init()
    }
    init() {
        this.yibu()
    }
    async yibu() {
        for (let i = 0; i < 5; i++) {
            var v = await this.time(i)
            console.log(v)
        }
    }
    time(i) {
        return new Promise((res, rej) => {
            // 模拟的异步 也可以ajax
            setTimeout(() => {
                res(i);
            }, 1000);
        })
    }
}

// 指定隐藏前几个字符
class yincang {
    constructor(str, count) {
        this.count = count
        this.str = str.toString()
        this.init()
    }
    init() {
        this.xiugai()
    }
    xiugai() {
        this.str = this.str.substr(this.count).padStart(this.str.length, "*")
        console.log(this.str)
    }
}

// 继承
class lei {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.b1()
    }
    b1() {
        console.log(`我是父类方法我叫${this.name}今年${this.age}岁`)
    }
}
class lei_zi extends lei {
    c1() {
        console.log('我是子类方法')
    }
}

export default {
    zhuanhuan,
    loops,
    ceshi,
    yincang,
    lei_zi
};