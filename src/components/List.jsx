import {task} from '../data/dataCard'
import Card from './Card'


function List() {
  return (
    <div className='grid grid-cols-5 mx-2 my-5 px-2 gap-2'>
        {task.map((task)=> (
        <Card  key={task.id} task={task}/>
       ))}
    </div>
  )
}

export default List