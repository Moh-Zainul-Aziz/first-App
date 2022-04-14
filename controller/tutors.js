let tutors = [
    {id:1, name:'Tutorial double exposure', application:'Adobe Photoshop'},
    {id:2, name:'Tutorial water splash', application:'Adobe Photoshop'},
    {id:3, name:'Tutorial create logo 3d', application:'Adobe Illustration'},
    {id:4, name:'Tutorial visual effect grunge', application:'Adobe After Effect'},
    {id:5, name:'Tutorial menghapus background', application:'Corel Photo'}
]

const findTutor = (id) =>{
    index = 0
    ketemu = -1
    while(ketemu == -1){
        if (id == tutors[index].id) {
            ketemu = index
        }
        index++
    }
    return ketemu
}

module.exports = {
    index : function (request,response) {
        response.json(tutors)
    },
    input : function (request, response) {
        console.log(request.body)
        response.send(request.body)
    },
    getTutorById : function (request, response) {
        id = request.params.id;
        idx = findTutor(id);
        dataTutor = tutors[idx];
        response.json(dataTutor)
    },
    update : function (request, response) {
        const id = request.params.id
        tutors.filter(tutor =>{
            if (tutor.id == id){
                tutor.id = id
                tutor.name = request.body.name
                tutor.application = request.body.application

                return tutor
            }
        })
        response.send(tutors)      
    },
    hapus : function (request, response) {
        let id = request.params.id
        tutors = tutors.filter(tutor => tutor.id !=id)
        response.send(tutors)
    }
}