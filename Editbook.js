import React, { useState, useEffect } from 'react';
import View from './View';




//getting value from local storage
const getdatafromlocalstorage = () => {
    const data = localStorage.getItem('books');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []    
    }
}



export default function BookList() {

    const [books, setBooks] = useState([]);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [bookNo, setBookNo] = useState('');



    
    function handleAddBookSubmit(e) {
        e.preventDefault();
        let book = {
            title: title,
            author: author,
            bookNo: bookNo
        }
        setBooks([...books, book]);
        setTitle('');
        setAuthor('');
        setBookNo('');
    }


    function editBook(){
        const bookdata=localStorage.getItem
    }


    const deleteBook = (bookNo) => {
        const filterBook = books.filter((element, index) => {
            return element.bookNo !== bookNo
        })
        setBooks(filterBook);
        setBooks('')
    }

    // const completeBook=()=>{
    //     if(title && author && bookNo){
    //         <Icon  icon={ic_check_circle}/>
    //     }
    //     else{

    //     }
    // }


    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    return (
        <div className='wrapper'>
            <h1>List App</h1>
            <p>Add and view your books using local storage</p>
            <div className='main'>

                <div className='form-container'>
                    <form autoComplete='off' className='form_group' onSubmit={handleAddBookSubmit}>
                        <label>Title</label><br></br>
                        <input type="text" className='form_control' required
                            onChange={(e) => setTitle(e.target.value)} value={title}/><br />

                        <label>Author</label><br></br>
                        <input type="text" className='form_control' required
                            onChange={(e) => setAuthor(e.target.value)}value={author} /><br />

                        <label>Book-No</label><br></br>
                        <input type="Number" className='form_control' required
                            onChange={(e) => setBookNo(e.target.value)} value={bookNo} /><br/>
                         
                        <button type='submit' className='btn btn-success btn-md'>Add</button>

                    </form>
                </div>
                <div className='view-container'>
                    {books.length > 0 &&
                        <>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Book-No</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                            <th>Comlete</th>
                                         
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <View books={books} deleteBook={deleteBook} />
                                    </tbody>
                                </table>
                            </div>

                            <button className='btn btn-danger btn-md' onClick={()=>{setBooks([])}}>Remove All</button>

                        </>}
                    {books.length < 1 && <div>no books are added yet</div>}

                </div>
            </div>
        </div>
    )
}
