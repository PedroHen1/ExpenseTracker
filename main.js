const add = document.getElementById('btn').addEventListener('click', btnclick)

function btnclick() {
    let all = document.getElementById('prc').value
    if (typeof (all) === 'string') {
        function added() {
            const name = function(){
                let nametxt = document.getElementById('txt').value
                let p = document.createElement("p");
                p.innerText = `You Buy: ${nametxt}`;
                document.getElementById("nametxt").appendChild(p) 
            }
            name();
        
            const date = function(){
                let datetxt = document.getElementById('dt').value
                let p = document.createElement("p");
                p.innerText = `On: ${datetxt}`;
                document.getElementById("datetxt").appendChild(p)
            }
            date();
        
            let price = function() {
                let pricetxt = document.getElementById('prc').value
                let p = document.createElement("p");
                p.innerHTML = `For: $${pricetxt}<button>X</button>`;
                document.getElementById("pricetxt").appendChild(p);
                document.getElementsByTagName("button")[0].setAttribute("id", "removendo");
            }
            price();

        }
        added()
    }
    else (alert('please'))
}
const remove = document.querySelector("#pricetxt").addEventListener('click', removido)
function removido(){
    let dateRemove = document.querySelector("#datetxt p")
    dateRemove.remove()

    let nameRemove = document.querySelector("#nametxt p")
    nameRemove.remove()

    let priceRemove = document.querySelector("#pricetxt p")
    priceRemove.remove()

    let btnRemove = document.getElementById("removendo")
    btnRemove.remove()
}
removido()
