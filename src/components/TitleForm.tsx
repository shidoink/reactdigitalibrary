import Input from './Input'
import {useForm} from 'react-hook-form'
import { server_calls } from '../api/server'
import {useDispatch, useStore} from 'react-redux'
import { chooseISBN, chooseTitle, chooseAuthor, chooseLength, chooseBinding } from '../redux/slices/Rootslice'

interface LibraryFormProps{
    id?: string[]
}

const TitleForm = ( props: LibraryFormProps) => {
    const {register, handleSubmit}= useForm({})
    const dispatch = useDispatch();
    const store = useStore();

const onSubmit = ( data: any, event:any)=>{
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length>0){
        server_calls.update(props.id[0], data)
        setTimeout(()=>{window.location.reload()},1000)
        console.log(`Updated: ${data.title} ${props.id}`)
        setTimeout(()=>{window.location.reload()},1000)
        event.target.reset()
    } else {
        dispatch(chooseISBN(data.isbn));
        dispatch(chooseTitle(data.title));
        dispatch(chooseAuthor(data.author));
        dispatch(chooseLength(data.length));
        dispatch(chooseBinding(data.binding));

        server_calls.create(store.getState())
        setTimeout(()=> {window.location.reload()}, 1000);
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="isbn"> ISBN</label>
            <Input {...register('isbn')} name='isbn' placeholder ='ISBN'/>
        </div>
        <div>
            <label htmlFor="title"> Title</label>
            <Input {...register('title')} name='title' placeholder ='Title'/>
        </div>
        <div>
            <label htmlFor="author"> Author</label>
            <Input {...register('author')} name='author' placeholder ='Author'/>
        </div>
        <div>
            <label htmlFor="length"> Length</label>
            <Input {...register ('length')}name='length' placeholder ='Length'/>
        </div>
        <div>
            <label htmlFor="Binding"> Binding</label>
            <Input {...register('binding')} name='binding' placeholder ='Binding'/>
        </div>
        <div className="flex p-1">
            <button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
                Submit</button>
        </div>
      </form>
    </div>
  )
}

export default TitleForm