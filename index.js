class Keyboard {
    constructor() {
        this.rusLang = "RUS";
        this.enLang = "ENG";
        this.language = localStorage.getItem("k-lang") || this.rusLang;
        this.rusLower = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Delete",
            "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
            "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&uarr;", "Shift",
            "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
        ];
        this.rusUpper = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
            "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Delete",
            "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
            "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "&uarr;", "Shift",
            "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
        ];
        this.enLower = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\"", "Enter",
            "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&uarr;", "Shift",
            "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
        ];
        this.enUpper = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
            "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Delete",
            "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
            "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&uarr;", "Shift",
            "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
        ];
        this.isUpper = false;
        this.activeKeyboard = this.rusUpper;
    }

    changeLang() {
        this.language = this.language === this.rusLang ? this.enLang : this.rusLang;
    }

    changeCase() {
        this.isUpper = !this.isUpper;
        this.activeKeyboard = this.language === this.rusLang ? this.isUpper ? this.rusUpper : this.rusLower
                                                             : this.isUpper ? this.enUpper : this.enLower;
    }

    drawKeyboard() {
        this.activeKeyboard.forEach(function(key, idx) {
            switch(key) {
                case "Tab":
                    break;
            }
        });
    }
}

!!function() {
    const generateMurkup = function() {
        const main = document.querySelector("main");
        const content = document.createElement("div");
        const txt = document.createElement("textarea");
        const keyboard = document.createElement("div");
        
        content.classList.add("content");
        txt.classList.add("textarea");
        keyboard.classList.add("keyboard");

        content.append(txt, keyboard);
        main.append(content);
    };
    window.onload = function() {
        generateMurkup();
        const keyboard = new Keyboard();
    };
}();