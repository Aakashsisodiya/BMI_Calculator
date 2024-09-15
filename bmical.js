const form = document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector("#results")

        if( height === ''|| height < 0 || isNaN(height) ){
            results.textContent=`Enter a Valid height`
        }
        else if( weight === ''|| weight < 0 || isNaN(weight) ){
            results.textContent=`Enter a Valid weight`
        }
        else{
            const bmi = (weight/((height*height)/10000)).toFixed(2)
            results.textContent=bmi  
            if(results.textContent<=18.6){
                results.textContent+="  Your under weight"
                results.style.color="yellow"
                results.style.fontSize="20px"
            }
            else if(results.textContent>18.6 && results.textContent<=24.6){
                results.textContent+="  Your noraml weight"
                results.style.color="green"
                results.style.fontSize="20px"

            } 
            else{
                results.textContent+="  Your Over weight"
                results.style.color="red"
                results.style.fontSize="20px"
            }
        }
        
})