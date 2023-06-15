// Styles
import styles from './CreatePost.module.css'

// Hooks
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInsertDocument } from '../../Hooks/useInsertDocument'

//Context
import { useAuthValue } from '../../context/authContext'
import { db } from '../../firebase/config'

const CreatePost = () => {
  const [post,setPost] = useState({title: "", image: "", body: "", tag: ""})
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const {insertDocument, response} = useInsertDocument("posts")
  const {user} = useAuthValue()

  const handleSubmit = e =>{
    e.preventDefault();
    setFormError("")
    
    // validar URL

    // criar Array de tags

    // checar todos os valores
    insertDocument({title: post.title, image: post.image, body: post.body, tags: post.tag.split(" "), uid: user.uid, createdBy: user.displayName})

  }

  const handleUpdatePost = e =>{
    e.preventDefault();
    setPost(oldPost => ({...oldPost, [e.target.name]: e.target.value}));
    }


  return (
    <div className={styles.container}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input type="text" name="title" required onChange={handleUpdatePost} placeholder='Insira um titulo legal' value={post.title}/>
        </label>

        <label>
          <span>Imagem:</span>
          <input type="text" name="image" required onChange={handleUpdatePost} placeholder='insira um link de imagem' value={post.image}/>
        </label>

        <label>
          <span>Corpo:</span>
          <textarea name="body" required onChange={handleUpdatePost} placeholder='insira uma descrição legal' value={post.body}></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type="text" name="tag" required onChange={handleUpdatePost} placeholder='insira as tags' value={post.tag}/>
        </label>
        {response.error && <p className='error'>{response.error}</p>}
        {!response.loading ? (<input type='submit' className='btn' value={'Postar'}/>) : <input type='submit' className='btn' value={'Postando...'} disabled/>}
      </form>

    </div>
  )
}

export default CreatePost