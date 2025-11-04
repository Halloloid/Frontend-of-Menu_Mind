import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import VideoGrid from '../components/Videogrid'
import BlogCarousel from '../components/BlogCarousel'

const Home = () => {
  const [image,setImage] = useState(null)
  const [dish,setDish] = useState("")
  const [score,setScore] = useState(0)
  const [videos,setVideos] = useState([])
  const [blog,setBlogs] = useState([])
  const [suggestion,setSuggestion] = useState("")
  const [shouldFetch, setShouldFetch] = useState(false)
  const [loading,setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const suggestionRef = React.useRef(null)
  const api = "https://backend-of-menu-mind.onrender.com/api"

  useEffect(() => {
    if (shouldFetch) {
      const fetchData = async () => {
        setLoading(true)
        try {
          // bump progress to indicate GETs started
          setProgress(prev => Math.max(prev, 55))
          const response = await axios.get(`${api}/suggestion/${score}/${dish}`)
          setProgress(75)
          const response2 = await axios.get(`${api}/recipe/videos/${dish}`)
          setProgress(85)
          const response3 = await axios.get(`${api}/recipe/blogs/${dish}`)
          setSuggestion(response.data.message)
          setVideos(response2.data.videos)
          setBlogs(response3.data.blog)
          // Scroll to suggestion section after data is loaded
          setTimeout(() => {
            suggestionRef.current?.scrollIntoView({ behavior: 'smooth' })
          }, 500)
          // finalize progress
          setProgress(100)
          // shortly after reaching 100% hide progress
          setTimeout(() => setProgress(0), 600)
        } catch (err) {
          console.error("Error fetching data:", err)
          // indicate error by resetting progress
          setProgress(0)
        } finally {
          setShouldFetch(false) // reset trigger
          setLoading(false)
        }
      }
      fetchData()
    }
  }, [shouldFetch])

  const onSubmit = async(e) =>{
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append("file",image)
      // reset progress and show loader
      setProgress(0)
      setLoading(true)
      const response = await axios.post(`${api}/predict`,formData,{
        headers:{"Content-Type":"multipart/form-data"},
        onUploadProgress: (progressEvent) => {
          try {
            if (progressEvent.total) {
              // allocate upload to 0-50%
              const percent = Math.round((progressEvent.loaded * 50) / progressEvent.total)
              setProgress(percent)
            }
          } catch (e) {
            // ignore progress errors
          }
        }
      })
      // ensure at least showing half-done after upload
      setProgress(prev => Math.max(prev, 50))
      setDish(response.data.data.prediction_class)
      setScore(response.data.data.confidence)
      setShouldFetch(true)
    } catch (error) {
      console.error("Error uploading file:", error)
    }
  }
  return (
    <div className='flex flex-col items-center'
      style={{
        background: "linear-gradient(180deg, #FFBAA3,#FFEFE1)",
        minHeight: "100vh"
      }}>
        {/* NavBar */}
        <nav className="w-full flex justify-between items-center px-4 sm:px-6 md:px-15 py-4 sm:py-6 bg-transparent">
        <div className="text-[#F55926] font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide">
          Dishify
        </div>
        <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-[#F55926] text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-[#e14d1f] transition-all" onClick={onSubmit}>
          {loading ? `Identifying... ${progress}%` : "Identify"}
        </button>
        </nav>
        <h1 className='text-xl sm:text-2xl md:text-[28px] font-bold text-center px-4'>Upload a Food Image</h1>
        <div className="flex flex-col items-center justify-center w-full">
  <label
    htmlFor="file-upload"
    className="flex flex-col items-center justify-center mt-5 w-[90%] sm:w-[80%] md:w-[928px] h-[150px] sm:h-[200px] md:h-[232px] border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 transition-all mx-4"
  >
    <h1 className='text-base sm:text-lg md:text-[18px] font-bold'>Upload</h1>
    <span className="text-gray-500 text-sm sm:text-base">Click to upload</span>
  </label>
  <input
    id="file-upload"
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    className="hidden"
  />

  {image && (
    <img
      src={URL.createObjectURL(image)}
      alt="preview"
      className="mt-4 w-[90%] sm:w-[80%] md:w-[928px] h-[300px] sm:h-[450px] md:h-[619px] object-cover rounded-xl shadow mx-4"
    />
  )}
        </div>
        <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#F55926] mt-5 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-[#e14d1f] transition-all mb-2" onClick={onSubmit}>
          {loading ? `Identifying Dish... ${progress}%` : "Identify Dish"}
        </button>
        {loading && (
          <div className="w-[90%] sm:w-[80%] md:w-[600px] h-2 bg-gray-200 rounded-full overflow-hidden mx-4 mb-4">
            <div className="h-full bg-[#F55926]" style={{ width: `${progress}%`, transition: 'width 200ms ease' }} />
          </div>
        )}
        <h1 ref={suggestionRef} className='text-2xl sm:text-3xl md:text-5xl mx-4 my-10 sm:m-20 font-bold text-center'>{suggestion}</h1>
        {videos && videos.length > 0 && <div className="flex flex-col mt-4 w-full px-4">
          <VideoGrid videos={videos}/>
        </div>}
        {blog && blog.length > 0 && <div className="flex flex-col w-full px-4">
          <BlogCarousel blog={blog}/>
        </div>}
      </div>
  )
}

export default Home