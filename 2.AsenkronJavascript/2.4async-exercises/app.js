const posts=[
    {id: 1,title: 'Spartacus',director: 'Steven S. DeKnight'},
    {id:2,title: 'The Punisher',dircetor:'Gail Barringer'},
    {id:3,title:'4Blocks',director: 'Richard Kropf'}
]

let newPost ={id:4,title:'The Vikings',director:'Michael Hirst'}

function listPost(){
    posts.map((post)=>{
        console.log(post);
    })
}

function addPost(data){
    return new Promise((resolve, reject) =>{
        posts.push(data);
        if(data){
        console.log('Yenis Post: ');
            resolve('post ekleme işlemi başarılı.');
        }
        else{
            reject('post ekleme işlemi başarısız.')
        }
    })
}

async function showPost(){
    try{
        console.log('Eski Post:')
        listPost()
        const showData= await addPost(newPost)
        listPost();
        console.log(showData);
    }
    catch(err){
        console.log(err)
    }
}
showPost()