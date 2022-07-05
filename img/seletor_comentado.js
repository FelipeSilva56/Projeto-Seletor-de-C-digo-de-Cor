var imageFile = document.getElementById('arquivo')

document.getElementById('preview')
.onclick = function(){
    document.getElementById('arquivo').click()
}
//quando o campo "preview" for clicado o input file que está desabilitado também recebe um click

window.addEventListener('DOMContentLoaded', () =>{
    //aero function
    imageFile.addEventListener('change', () => {
    //quando ocorrer uma mudança no input esta função será executada
        let file = imageFile.files.item(0)
        //pega o item de posição (0) carregado pelo input e coloca dentro de uma variavel
        let reader = new FileReader()
        //cria uma variável com a função de ler um novo arquivo
        reader.readAsDataURL(file)
        //faz o leitor ler os dados dentro da variavel "file" 
        reader.onload = function(event){
            //acrescentamos a funcionalidade de onload (carregar) a variavel reader que também receberá uma função
            let image = document.getElementById('image')
            image.src = event.target.result
            //adicionar no src do elemento image o resultado da função de carregamento do arquivo lido (reader) que seria o "target"
            image.style.width = '450px'
        }
    })
    
})