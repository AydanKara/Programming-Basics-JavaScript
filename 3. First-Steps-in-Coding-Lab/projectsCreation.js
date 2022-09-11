function projectsCreation(input){
    
    let name = input[0]
    let project = Number(input[1])
    let hours = 3
    let hourstocomplete = project * hours
    let result = `The architect ${name} will need ${hourstocomplete} hours to complete ${project} project/s.`
    console.log(result)

}

projectsCreation(["Aydan","4"])