// const promise1 = new Promise((resolve,rejecet)=>{
//      resolve('Veriler Alındı.')
//     rejecet('Bağlantı Hatası')
// });

// promise1
//     .then((value)=>{
//     console.log(value);
//     }).catch(err => console.error(err));


const books=[
    {name:'Kitap 1', author:'Yazar 1'},
    {name:'Kitap 2', author:'Yazar 2'},
    {name:'Kitap 3', author:'Yazar 3'}
]

const listBooks=()=>{
    books.map((book)=>{
        console.log(book.name);
    })
}


const addBook=(newBook)=>{
    const promise1=new Promise((resolve, reject)=>{
        books.push(newBook);
        resolve(books)
        reject('Hata Oluştu')
    })
    return promise1;
}
addBook({name:'Kitap 4', author:'Yazar 4'})
    .then(()=>{
        console.log('Yeni Liste.')
        listBooks()
    }).catch(err=>console.log(err))

// async function showBook(){
//     try{
//         await addBook({name:'Kitap 6', author:'Yazar 4'});
//         listBooks();
//     }
//     catch (err){
//         console.log(err)
//     }

// }

// showBook()
