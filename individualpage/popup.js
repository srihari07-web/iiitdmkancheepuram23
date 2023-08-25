  var modal = document.getElementById("myModal");
                var openModal = document.getElementById("openModal");
                var closeBtn = document.getElementsByClassName("close")[0];
                var videoContainer = document.getElementById("videoContainer");

                openModal.onclick = function () {
                    var iframe = document.createElement("iframe");
                    iframe.setAttribute("src", "https://www.youtube.com/embed/fFyRDpxpbGM?autoplay=1");
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("allowfullscreen", "true");
                    videoContainer.appendChild(iframe);
                    modal.style.display = "block";
                };

                closeBtn.onclick = function () {
                    videoContainer.innerHTML = "";
                    modal.style.display = "none";
                };

                window.onclick = function (event) {
                    if (event.target == modal) {
                        videoContainer.innerHTML = "";
                        modal.style.display = "none";
                    }
                };