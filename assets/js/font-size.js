 function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'hi,en',
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                autoDisplay: false
            }, 'google_translate_element');
            var select = document.querySelector('#google_translate_element select');
            select.style.display = 'none';
            var links = document.querySelectorAll('#google_translate_element a');
            links[0].textContent = 'हिंदी';
            links[0].href = '#googtrans(hi)';
            links[1].textContent = 'English';
            links[1].href = '#googtrans(en)';
        }
        var increaseCounter = 0;
        var decreaseCounter = 0;
        function increaseFontSize() {
            if (increaseCounter < 3) {
                var textElements = document.getElementsByClassName("text");
                for (var i = 0; i < textElements.length; i++) {
                    var currentFontSize = parseInt(window.getComputedStyle(textElements[i]).fontSize);
                    var newFontSize = currentFontSize + 1;
                    textElements[i].style.fontSize = newFontSize + "px";
                }
                increaseCounter++;
            }
        }
        function resetFontSize() {
            var textElements = document.getElementsByClassName("text");
            for (var i = 0; i < textElements.length; i++) {
                textElements[i].style.fontSize = "16px";
            }
            increaseCounter = 0;
            decreaseCounter = 0;
            console.log("Font size reset.");
        }
        function decreaseFontSize() {
            if (decreaseCounter < 3) {
                var textElements = document.getElementsByClassName("text");
                for (var i = 0; i < textElements.length; i++) {
                    var currentFontSize = parseInt(window.getComputedStyle(textElements[i]).fontSize);
                    var newFontSize = currentFontSize - 1;
                    textElements[i].style.fontSize = newFontSize + "px";
                }
                decreaseCounter++;
            }
        }