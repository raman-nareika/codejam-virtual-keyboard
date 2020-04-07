class Keyboard {
    constructor() {
        this.rusLang = "RUS";
        this.enLang = "ENG";
        this.language = localStorage.getItem("k-lang") || this.rusLang;
        this.rusLower = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
            "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
            "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&uarr;", "Shift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"
        ];
        this.rusUpper = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
            "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
            "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
            "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "&uarr;", "Shift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"
        ];
        this.enLower = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\"", "Enter",
            "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&uarr;", "Shift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"
        ];
        this.enUpper = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
            "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
            "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
            "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&uarr;", "Shift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"
        ];
        this.keyCodes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
                         9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
                         46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
                         16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17,
                         91, 18, 32, 18, 37, 40, 39, 17
                        ];
        this.isUpper = false;
        this.activeKeyboard = this.rusUpper;
        this.textarea = document.createElement("textarea");
        this.keyboard = document.createElement("div");
    }

    changeLang() {
        this.language = this.language === this.rusLang ? this.enLang : this.rusLang;
    }

    changeCase() {
        this.isUpper = !this.isUpper;
        this.activeKeyboard = this.language === this.rusLang ? this.isUpper ? this.rusUpper : this.rusLower
                                                             : this.isUpper ? this.enUpper : this.enLower;
    }

    clearKeyboard() {
        document.querySelectorAll(".keyboard span").forEach(k => k.remove());
    }

    drawKeyboard() {
        this.clearKeyboard();
        this.activeKeyboard.forEach((k, idx) => {
            if (idx === 14 || idx === 29 || idx === 42 || idx === 55) {
                const clearfix = document.createElement("div");
                clearfix.classList.add("clearfix")
                this.keyboard.append(clearfix);
            }

            const key = document.createElement("span");

            key.classList.add("key");
            key.innerHTML = k;

            switch(k) {
                case "Backspace":
                    key.classList.add("backspace");
                    break;
                case "Tab":
                    key.classList.add("tab");
                    break;
                case "CapsLock":
                    key.classList.add("capslock");
                    break;
                case "Enter":
                    key.classList.add("enter");
                    break;
                case "Shift":
                    key.classList.add("shift");
                    break;
                case "Space":
                    key.classList.add("space");
                    break;
                default:
                    //key.classList.add("key");
                    break;
            }

            this.keyboard.append(key);
        });
    }

    generateMurkup() {
        const main = document.querySelector("main");
        const content = document.createElement("div");
        
        content.classList.add("content");
        this.textarea.classList.add("textarea");
        this.keyboard.classList.add("keyboard");

        content.append(this.textarea, this.keyboard);
        main.append(content);
    };
}

!!function() {
    window.onload = function() {
        const keyboard = new Keyboard();

        keyboard.generateMurkup();
        keyboard.drawKeyboard();
    };
}();