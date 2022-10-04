import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import _ from 'lodash';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html'

function EditPage() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState();

  /** lifecycle */
  useEffect(() => {
   db.on('value', function (snapshot) {
        setPosts(snapshot.val());
        console.log('yoo',snapshot.val());
    });
    }, [])


  /** Render posts from firebase */
  function renderPosts() {
    return _.map(posts, (post, key) => {
      return ( 
      
      
      <div key={key}>
      
      <h2>{post.title}</h2>
      <p>{renderHTML(post.body)}</p>


      </div>
      )
      
    })
  }


  
function onInputChangeTitle(e) {
setTitle(e.target.value);
}

function onInputChangeBody(e) {
  setBody(e);
  console.log('boddy', body)

  }


  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: title,
      body: body,
    }
    db.push(post);
    // console.log('asdf', post)
    setBody('');
    setTitle('');

    }

    



  return (
   <>
   
   <div className="container">
    <form onSubmit={handleSubmit}>
      <div className='form-group mt-3'>
      <input className="form-control" type="text" name="title" value={title} placeholder="Title" onChange={onInputChangeTitle}  />
      </div>
      <div className='form-group mt-3'>
      <ReactQuill modules={EditPage.modules} format={EditPage.formats} value={body} placeholder="Body" onChange={onInputChangeBody}  />
      </div>
      <button className="btn btn-primary mt-3">Post</button>
    </form>
   
   
   <br/>
   {renderPosts()}
   </div>
   
    

   
   </>
  );
}

EditPage.modules = {
  toolbar: [
    [ { 'header': '1' }, { 'header': '2' }, { font: [] }],
    [ {size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']

  ]
}

EditPage.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 
  'list', 'bullet', 'link',
  'image','video', 'code-block'
]

export default EditPage;
