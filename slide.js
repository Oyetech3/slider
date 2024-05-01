let slidecontainer = document.querySelector('.slidecontainer')
        let imgcontain = document.querySelectorAll('.imgcontain')
        let prev = document.getElementById("prev")
        let next = document.getElementById("next")
        let dotbtn = document.querySelectorAll('.btn')
        
        let slidelength = slidecontainer.children.length
        let imglength = imgcontain.length
        let index = 0
        let auto;
        
        function sliding(n) {
            clearInterval(auto)

            imgcontain[index].classList.remove('active')
            dotbtn.forEach(val => {
                val.classList.remove('active')
            })

            index += n
            if(index > (imglength - 1)) {
                index = 0
            }
            else if(index < 0) {
                index = imglength - 1
            }
            const trans = -index * 100 + "%"
            slidecontainer.style.transform = 'translateX(' + trans +')'

            imgcontain[index].classList.add('active')
            dotbtn[index].classList.add('active')

            auto = setInterval(() => {
                sliding(1)
            },5000)
        
        }
        
        function buttonclick(n) {
            clearInterval(auto)

            dotbtn.forEach(val => {
                val.classList.remove('active')
            })

            let trans = -n * 100 + "%"
            slidecontainer.style.transform = 'translateX('+ trans +')'

            imgcontain[n].classList.add('active')
            dotbtn[n].classList.add('active')

           

        }
        //Autoslide
        const autoslide = () => {
            auto = setInterval(() => {
                sliding(1)
            },5000)
        }
        autoslide()
