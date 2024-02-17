document.addEventListener("DOMContentLoaded", function(){
    const seiska = document.getElementById("seiska");
    const kirsikka = document.getElementById("kirsikka");
    const bar = document.getElementById("bar");
    const kello = document.getElementById("kello");
    const bar2 = document.getElementById("bar2");

    const seiska7 = document.getElementById("seiska7");
    const kirsikka7 = document.getElementById("kirsikka7");
    const bar7 = document.getElementById("bar7");
    const kello7 = document.getElementById("kello7");
    const bar27 = document.getElementById("bar27");

    const seiska8 = document.getElementById("seiska8");
    const kirsikka8 = document.getElementById("kirsikka8");
    const bar8 = document.getElementById("bar8");
    const kello8 = document.getElementById("kello8");
    const bar28 = document.getElementById("bar28");

    const seiska9 = document.getElementById("seiska9");
    const kirsikka9 = document.getElementById("kirsikka9");
    const bar9 = document.getElementById("bar9");
    const kello9 = document.getElementById("kello9");
    const bar29 = document.getElementById("bar29");

    const lukitse1 = document.getElementById("lukitse1");
    const lukitse2 = document.getElementById("lukitse2");
    const lukitse3 = document.getElementById("lukitse3");
    const lukitse4 = document.getElementById("lukitse4");

    const bet1 = document.getElementById("bet1");
    const bet2 = document.getElementById("bet2");
    const bet3 = document.getElementById("bet3");
    const bet5 = document.getElementById("bet5");
    const maxbet = document.getElementById("maxbet");

    let rahat = document.getElementById("rahat");

    pyorita = document.getElementById("pyorita");

    setInterval(randomNumber, 100);

    function randomNumber() {
        let luku = Math.random();
        if(luku <= 0.35){
            randomLuku = 0;
            return randomLuku;
        }
        if(luku > 0.35 && luku <= 0.6){
            randomLuku = 1;
            return randomLuku;
        }
        if(luku > 0.6 && luku <= 0.8){
            randomLuku = 2;
            return randomLuku;
        }
        if(luku > 0.8 && luku <= 0.95){
            randomLuku = 3;
            return randomLuku;
        }
        if(luku > 0.95 && luku <= 1){
            randomLuku = 4;
            return randomLuku;
        }
    };
    let lukulista = [];
    let lukitse1Check = false;
    let lukitse2Check = false;
    let lukitse3Check = false;
    let lukitse4Check = false;
    let restart = false;
    let tuplaCheck = true;

    let rahaMaara = 100;
    let panos = 1;

    function neljaLukua(){
        if(lukitse1Check == false){
            luku1 = randomNumber();
            lukitse1Check = false;
        }
        if(lukitse2Check == false){
            luku2 = randomNumber();
            lukitse2Check = false;
        }
        if(lukitse3Check == false){
            luku3 = randomNumber();
            lukitse3Check = false;
        }
        if(lukitse4Check == false){
            luku4 = randomNumber();
            lukitse4Check = false;
        }
        lukulista = [luku1, luku2, luku3, luku4];
        return lukulista
    }

    let miinuksella = false;

    pyorita.addEventListener("click", function(){
        pyorita.classList.add("click-animation2");
        setTimeout(function(){
            pyorita.classList.remove("click-animation2");
        }, 200);
        let luvut = neljaLukua();
        if(restart == false){
            tuplaCheck = true;
        }
        if(restart){
            lukitse1Check = false;
            lukitse2Check = false;
            lukitse3Check = false;
            lukitse4Check = false;
            tuplaCheck = false;
            restart = false;
        }
        if(rahaMaara < panos){
            alert("Rahasi eivät riitä panokseen");
            if(rahaMaara <= 0){
                miinuksella = true;
            }
        }
        if(miinuksella == false){
            if(rahaMaara > 0 && rahaMaara >= panos){
                pyorayta();
                rahaMaara -= panos;
            }
        }
        setInterval(function(){
            rahat.innerHTML = `Rahat: ${rahaMaara} kolikkoa`;
        }, 100);
        console.log(luvut);
        let lisays = 0;
        if(lukulista[0] == lukulista[1]){
            if(lukulista[0] == lukulista[2]){
                if(lukulista[0] == lukulista[3]){
                    if(lukulista[0] == 0){
                        lisays = panos * 5;
                        rahaMaara += lisays;
                        alert(`Voitit ${lisays} kolikkoa`);
                    }
                    if(lukulista[0] == 1){
                        lisays = panos * 25;
                        rahaMaara += lisays;
                        alert(`Voitit ${lisays} kolikkoa`);
                    }
                    if(lukulista[0] == 2){
                        lisays = panos * 75;
                        rahaMaara += lisays;
                        alert(`Voitit ${lisays} kolikkoa`);
                    }
                    if(lukulista[0] == 3){
                        lisays = panos * 200;
                        rahaMaara += lisays;
                        alert(`Voitit ${lisays} kolikkoa`);
                    }
                    if(lukulista[0] == 3){
                        lisays = panos * 1000;
                        rahaMaara += lisays;
                        alert(`Voitit ${lisays} kolikkoa`);
                    }
                }
            }
        }
    });

    lukitse1.addEventListener("click", function(){
        if(tuplaCheck){
            lukitse1Check = true;
        }
        restart = true;
        lukitse1.classList.add("click-animation2");
        setTimeout(function(){
            lukitse1.classList.remove("click-animation2");
        }, 200);
    });

    lukitse2.addEventListener("click", function(){
        if(tuplaCheck){
            lukitse2Check = true;
        }
        restart = true;
        lukitse2.classList.add("click-animation2");
        setTimeout(function(){
            lukitse2.classList.remove("click-animation2");
        }, 200);
    });

    lukitse3.addEventListener("click", function(){
        if(tuplaCheck){
            lukitse3Check = true;
        }
        restart = true;
        lukitse3.classList.add("click-animation2");
        setTimeout(function(){
            lukitse3.classList.remove("click-animation2");
        }, 200);
    });

    lukitse4.addEventListener("click", function(){
        if(tuplaCheck){
            lukitse4Check = true;
        }
        restart = true;
        lukitse4.classList.add("click-animation2");
        setTimeout(function(){
            lukitse4.classList.remove("click-animation2");
        }, 200);
    });
    bet1.classList.add("click-animation");
    bet1.addEventListener("click", function(){
        panos = 1;
        bet1.classList.add("click-animation");
        bet2.classList.remove("click-animation");
        bet3.classList.remove("click-animation");
        bet5.classList.remove("click-animation");
        maxbet.classList.remove("click-animation");
    });

    bet2.addEventListener("click", function(){
        panos = 2;
        bet1.classList.remove("click-animation");
        bet2.classList.add("click-animation");
        bet3.classList.remove("click-animation");
        bet5.classList.remove("click-animation");
        maxbet.classList.remove("click-animation");
    });

    bet3.addEventListener("click", function(){
        panos = 3;
        bet1.classList.remove("click-animation");
        bet2.classList.remove("click-animation");
        bet3.classList.add("click-animation");
        bet5.classList.remove("click-animation");
        maxbet.classList.remove("click-animation");
    });

    bet5.addEventListener("click", function(){
        panos = 5;
        bet1.classList.remove("click-animation");
        bet2.classList.remove("click-animation");
        bet3.classList.remove("click-animation");
        bet5.classList.add("click-animation");
        maxbet.classList.remove("click-animation");
    });

    maxbet.addEventListener("click", function(){
        panos = 10;
        bet1.classList.remove("click-animation");
        bet2.classList.remove("click-animation");
        bet3.classList.remove("click-animation");
        bet5.classList.remove("click-animation");
        maxbet.classList.add("click-animation");
    });

    function pyorayta(){
        bar2.style.display = "none";
        kirsikka.style.display = "none";
        kello.style.display = "none";
        bar.style.display = "none";
        seiska.style.display = "none";

        bar27.style.display = "none";
        kirsikka7.style.display = "none";
        kello7.style.display = "none";
        bar7.style.display = "none";
        seiska7.style.display = "none";

        bar28.style.display = "none";
        kirsikka8.style.display = "none";
        kello8.style.display = "none";
        bar8.style.display = "none";
        seiska8.style.display = "none";

        bar29.style.display = "none";
        kirsikka9.style.display = "none";
        kello9.style.display = "none";
        bar9.style.display = "none";
        seiska9.style.display = "none";

        for(i in lukulista){
            if(lukulista[0] == 0){
                bar2.style.display = "block";
            }
            if(lukulista[0] == 1){
                kirsikka.style.display = "block";
            }
            if(lukulista[0] == 2){
                kello.style.display = "block";
            }
            if(lukulista[0] == 3){
                bar.style.display = "block";
            }
            if(lukulista[0] == 4){
                seiska.style.display = "block";
            }

            if(lukulista[1] == 0){
                bar27.style.display = "block";
            }
            if(lukulista[1] == 1){
                kirsikka7.style.display = "block";
            }
            if(lukulista[1] == 2){
                kello7.style.display = "block";
            }
            if(lukulista[1] == 3){
                bar7.style.display = "block";
            }
            if(lukulista[1] == 4){
                seiska7.style.display = "block";
            }

            if(lukulista[2] == 0){
                bar28.style.display = "block";
            }
            if(lukulista[2] == 1){
                kirsikka8.style.display = "block";
            }
            if(lukulista[2] == 2){
                kello8.style.display = "block";
            }
            if(lukulista[2] == 3){
                bar8.style.display = "block";
            }
            if(lukulista[2] == 4){
                seiska8.style.display = "block";
            }

            if(lukulista[3] == 0){
                bar29.style.display = "block";
            }
            if(lukulista[3] == 1){
                kirsikka9.style.display = "block";
            }
            if(lukulista[3] == 2){
                kello9.style.display = "block";
            }
            if(lukulista[3] == 3){
                bar9.style.display = "block";
            }
            if(lukulista[3] == 4){
                seiska9.style.display = "block";
            }
        }
    }



});