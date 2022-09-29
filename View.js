import React from 'react'
import Icon, {icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle'
import {ic_check_circle_outline} from 'react-icons-kit/md/ic_check_circle_outline'


export default function View({books,deleteBook,editBook,completeBook}) {
  return books.map(book=>(
    <tr key={book.bookNo}>
        <td>{book.bookNo}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td className='edit-btn' onClick={()=>editBook(book.bookNo)} >
            <Icon  icon={edit}/></td>
        <td className='delete-btn' onClick={()=>deleteBook(book.bookNo)}>
            <Icon  icon={trash}/></td>
        <td className='complete-btn' onClick={()=>completeBook(book.bookNo)}>
            <Icon  icon={ic_check_circle}/></td>
         
            
        
    </tr>
  ))
}
