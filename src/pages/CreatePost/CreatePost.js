// Styles
import styles from './CreatePost.module.css'

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Context
import { useAuthValue } from '../../context/authContext'

const CreatePost = () => {
  const [post,setPost] = useState({title: "", image: "", body: "", tag: ""})
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = e =>{
    e.preventDefault();
    setLoading(true)

    setLoading(false)
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
        {error && <p className='error'>{error}</p>}
        {!loading && <input type='submit' className='btn' value={'Postar'}></input>}
        {loading && <input type='submit' className='btn' value={'Postando...'} disabled></input>}

      </form>

    </div>
  )
}

export default CreatePost