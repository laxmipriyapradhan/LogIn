import React, {useState,useEffect} from 'react'
import Icon, {icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle'
import {ic_check_circle_outline} from 'react-icons-kit/md/ic_check_circle_outline'


export default function View({books,deleteBook}) {
    const[book, setBook] = useState([])
    const [completeicon, setCompleteicon]=useState(false);

    useEffect(() => {
        localStorage.setItem('editbook', JSON.stringify(book));
        if(books.title='' ){
            console.log("ggg");
        }
        
    }, [book])

    console.log("Books",books);
    return books.map(book=>(
    <tr key={book.bookNo}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.bookNo}</td>
        <td className='edit-btn' onClick={()=>setBook(book)} >
            <Icon  icon={edit}/></td>
        <td className='delete-btn' onClick={()=>deleteBook(book.bookNo)}>
            <Icon  icon={trash}/></td>
            {completeicon?
        <td className='complete-btn' >
            <Icon  icon={ic_check_circle}/></td>:<td className='complete-btn' >
                    <Icon  icon={ic_check_circle_outline}/></td>}
            {/* {completeicon? 
                    <td className='complete-btn' >
                    <Icon  icon={ic_check_circle}/></td>
                    :<td className='complete-btn' >
                    <Icon  icon={ic_check_circle_outline}/></td>}
          */}
            
        
    </tr>
  ))
}
