
    let key='8359c201e04fb12ff228dfb1aaf65e12';

    let tops=document.getElementById("tops");
    let dis=document.getElementById("sevendayweather");

    
    
     function weather1(data) {
    
         tops.innerHTML=''
            let min_temp=data.main.temp_min;
            let max_temp=data.main.temp_min;
            let sunset=data.sys.sunset;
            let sunrise=data.sys.sunrise;
            let clouds=data.clouds.all;
            let wind=data.wind.speed;
            
            
            

         var div=document.createElement("div");
         div.setAttribute("class","wether")
         div.style.background="rgb(100,200,300)"
        div.style.borderRadius="45px"


         let h3=document.createElement("h3");
         h3.textContent=data.name;

         let d1=document.createElement("div");
         d1.setAttribute("id","d1")
         let div1 = document.createElement("div");

         let div11 = document.createElement("span");
         div11.innerHTML='<i class="fas fa-sun"></i>';
         let p1=document.createElement("span");
         p1.textContent="Min-Temp:"+" "+Math.floor(min_temp-273)+"°C";
         
         div1.append(div11,p1)
         d1.append(div1)

           let d2 = document.createElement("div");
         d2.setAttribute("id", "d2")
         let div2 = document.createElement("div");

         let div22 = document.createElement("span");
         div22.innerHTML='<i class="fas fa-temperature-high">';
         let p2=document.createElement("span");
         p2.textContent = "Max-Temp:" + " " + Math.floor(max_temp - 273) +"°C";

         div2.append(div22,p2)
         d2.append(div2)


           let d3 = document.createElement("div");
         d3.setAttribute("id", "d3")
         let div3=document.createElement("div");

         let div33=document.createElement("span");
         div33.innerHTML='<i class="fas fa-cloud-rain"></i>';
         let span1=document.createElement("span");
         span1.textContent="sunset"+":"+sunset;
         div3.append(div33,span1)
          d3.append(div3)

            let d4 = document.createElement("div");
         d4.setAttribute("id", "d4")
        let div4=document.createElement("div");

         let div44=document.createElement("span")
         div44.innerHTML='<i class="fas fa-sun"></i>';
         let span2=document.createElement("span");
         span2.textContent="sunset"+":"+sunset;
         div4.append(div44,span2)
         d4.append(div4)

           let d5 = document.createElement("div");
         d5.setAttribute("id", "d5")
         let div5 = document.createElement("div");

         let div55 = document.createElement("span")
         div55.innerHTML='<i class="fas fa-cloud"></i>';
         let p5=document.createElement("span")
         p5.textContent="clouds"+":"+clouds;

         div5.append(div55,p5)
         d5.append(div5)

           let d6 = document.createElement("div");
         d6.setAttribute("id", "d6")
         let div6 = document.createElement("div");

         let div66 = document.createElement("span")
         div66.innerHTML='<i i class="fas fa-tachometer-alt" ></i >';
         let p6=document.createElement("span")
         p6.textContent="wind"+":"+wind;
         div6.append(div66,p6)
         d6.append(div6)
         div.append(h3,d1,d2,d3,d4,d5,d6);
         tops.append(div);
     }
    
        
    
    let arr=['sun','mon','thu','wed','thr','fri','sat'];
    let ren=Math.floor(Math.random()*6);
    arr.push(arr[ren])
function weather() {
        let city=document.getElementById("input").value;
        
    
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(resp){
            console.log(resp)
            console.log(resp.name)
            
           let lat=resp.coord.lat;
           let lon=resp.coord.lon;
           let city=resp.name;
            weather1(resp)
           dist(lat,lon,city);
        })
    }

function dist(lat,lon,city){
    dis.innerHTML="";
        let url1=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${city}&appid=${key}`;
        
        fetch(url1)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            console.log(res);
            
            let everyday=res.daily;
            
            
            everyday.forEach(function(item,index){
                let div=document.createElement("div");
                
              
               let l5 = document.createElement("li");
               l5.textContent = arr[index];
               
               dis.style.background="black";
               div.style.background ="rgb(18,58,58)";
               div.append(l5)
                
           
                
                console.log(item);
                console.log(item.temp.min);
                console.log(item.temp.max);
                item.weather.forEach(function(des){
                       console.log(des.description);
                       if(des.description==="moderate rain"){
                        //    let div1=document.createElement("div");

                          let div1 = document.createElement("span");
                           div1.innerHTML = '<i class="fas fa-cloud-sun-rain"></i>';
                        
                           div.append(div1)
                    }
                    else if(des.description==="light rain"){
                         let div2 = document.createElement("span");
                           div2.innerHTML = ' <i class="fas fa-cloud-showers-heavy"></i>';

                           div.append(div2)
                           
                        }
                        else if(des.description==="few clouds"){
                            let div3 = document.createElement("span");
                              div3.innerHTML = '<i class="fas fa-cloud-moon"></i>';
    
                              div.append(div3)

                    }
                        else{
                            let div3 = document.createElement("span");
                              div3.innerHTML = '<i class="fas fa-poo-storm"></i>';
    
                              div.append(div3)

                    }
                    
                    
                    
                    
                    
                    
                })
                
                
                let l1=document.createElement("li");
                l1.textContent=Math.floor(item.temp.min-273)+"°";
                
                let l2=document.createElement("li");
                l2.textContent=Math.floor(item.temp.max-273)+"°";
                
                
                
                div.append(l1,l2);
                dis.append(div);
                
            
            })
        })

        
    

        
        
    }

