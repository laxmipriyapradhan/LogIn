import React, { useState, useEffect } from 'react';
import View from './View';
import Icon, {icon} from 'react-icons-kit'
import { useParams } from "react-router-dom";
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle'
import {ic_check_circle_outline} from 'react-icons-kit/md/ic_check_circle_outline'




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
    const [editbook,setEditbook]=useState([]);
   



    
    function handleAddBookSubmit(e) {

        // if(!bookNo && !author && !title){
        //     setCompleteicon(false)
        // }
        // else{
        //     setCompleteicon(true)
        // }

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

    
    


    const deleteBook = (bookNo) => {
        const filterBook = books.filter((element, index) => {
            return element.bookNo !== bookNo
        })
        setBooks(filterBook);
        setBooks('')
    }

    

    useEffect(() => {
        //localStorage.getItem('books', JSON.stringify(books));
        const item = JSON.parse(localStorage.getItem('editbook'));
        console.log('item',item);
        setEditbook(item);
        
        
    }, [title, author])

    return (
        <div className='wrapper'>

            {console.log("editbook",editbook)}

            <h1>List App</h1>
            <p>Add and view your books using local storage</p>
            <div className='main'>

                <div className='form-container'>
                    <form autoComplete='off' className='form_group' onSubmit={handleAddBookSubmit}>
                    
                    

                        <label>Title</label><br></br>
                        <input type="text" className='form_control' 
                            onChange={(e) => setTitle(e.target.value)} value={title}/><br />

                        <label>Author</label><br></br>
                        <input type="text" className='form_control' 
                            onChange={(e) => setAuthor(e.target.value)}value={author} /><br />

                        <label>Book-No</label><br></br>
                        <input type="Number" className='form_control' 
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
